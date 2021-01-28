package com.axis.controller

import com.axis.model.Partner
import com.axis.model.PartnerDetail
import com.axis.model.Transaction
import com.axis.repository.TransactionRepository
import com.axis.service.PartnerService
import io.swagger.annotations.ApiOperation
import org.json.JSONArray
import org.json.JSONObject
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import java.time.LocalDateTime
@CrossOrigin
@RestController
@RequestMapping("/api")
class PartnerControlNew(
    @Autowired val partnerService: PartnerService,
    @Autowired val transactionRepository: TransactionRepository
) {
    var logger = LoggerFactory.getLogger(this.javaClass)

    @ApiOperation("fetches all the available partner of a particular insurance type")
    @GetMapping("/get-partners/{type}")
    fun getPartner(@PathVariable type: String): List<Partner> {
        logger.info("\n\n-<<[ endpoint:/api/get-partners/{type},FETCHING PARTNERS.. ] >>-\n\n")
        return partnerService.getPartnerByType(type)
    }

    @ApiOperation("fetches quote by partner-id")
    @PostMapping("/get-quote/{id}")
    fun getQuote(@RequestBody formData: String, @PathVariable id: Int): String {
        val partner = partnerService.findById(id)
        val insuranceType = partner.insuranceType
        val msg = partnerService.getQuotes(partner, formData)
        logger.info("\n\n-<<[ endpoint:/api/get-quote/{id},FETCHING Particular QUOTE.. ] >>-\n\n")
        logger.info("\n\n -<<Captured Form DATA: $formData, id: $id >>-\n\n")
        logger.info("\n\n-<<[ endpoint:/api/get-quote/{id},QUOTE:: ${msg.substring(1, msg.length - 1)} ] >>-\n\n")
        val price = JSONObject(msg.substring(1, msg.length - 1)).get("price").toString()
        transactionRepository.save(Transaction(0, price.toDouble(), insuranceType, partner.name, LocalDateTime.now()))
        return msg

    }

    @ApiOperation("fetches partners quotes. used in compare quotes.")
    @PostMapping("/get-quotes/{type}/{id}")
    fun getQuotes(@RequestBody formData: String, @PathVariable type: String, @PathVariable id: Int): List<String> {
        logger.info("\n\n-<<[ endpoint:/api/get-quotes/{type}/{id},FETCHING QUOTES FROM OTHER PARTNERS.. ] >>-\n\n")
        val partners = partnerService.getPartnerByType(type)
        val quotes: MutableList<String> = mutableListOf()
        var quote: String
        logger.info("\n\n-<<[MULTIQUOTES: Captured Form Data --$formData]>>-\n\n")
        for (partner in partners) {
            if (partner.id != id) {
                println("\n\n")
                quote = partnerService.getQuotes(partner, formData)
                quote = quote.substring(1, (quote.length - 1))
                quotes.add(quote)
            }
        }
        println(quotes)
        return quotes
    }

    @ApiOperation("check the details of the current partner form and check what else is required by the other partners.(before) actually fillling the form")
    @GetMapping("/get-additional-fields/{id}")
    fun getAdditionalFields(@PathVariable id: Int): List<String> {
        logger.info("\n\n-<<[ endpoint:/api/get-additional-fields/{id},FETCHING additional fields required.. ] >>-\n\n")
        val currentPartner = partnerService.findById(id)
        val partners = partnerService.getPartnerByType(currentPartner.insuranceType)
        val currentRequestBody = JSONObject(currentPartner.requestBody).toMap()
        var reqBody: MutableMap<*, *>
        var lst: MutableCollection<Any>
        val field = mutableListOf<String>()

        for (partner in partners) {
            if (partner.id != id) {
                reqBody = JSONObject(partner.requestBody).toMap()
                lst = reqBody.values
                lst.removeIf {
                    it in currentRequestBody.values
                }
                logger.info("\n\n-<<[I am ${partner.name} and I need $lst]>>-\n\n")
                val y = JSONObject(partner.feilds).get("fields") as JSONArray

                for (i in 0 until y.length()) {
                    val item = y.getJSONObject(i)
                    if (item.get("name") in lst && item !in field) {
                        println("~~~ $item")
                        field.add(item.toString())
                    }
                }

            }
        }
        val retArr = field.distinct()
        logger.info("\n\n-<<[Is that you finally want??${field.distinct()}]>>-\n\n")
        return retArr
    }
    @ApiOperation("Unique partners list.")
    @GetMapping("/describe-partners")
    fun getPartnersDescription(): List<PartnerDetail>? {
        logger.info("\n\n-<<[ endpoint:/api/describe-partners FETCHING PARTNERS DETAILS..]>>-\n\n")
        return partnerService.getPartnersDetails()
    }

}