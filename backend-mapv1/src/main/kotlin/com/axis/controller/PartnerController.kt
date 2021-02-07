package com.axis.controller

import com.axis.model.EndPointsStatus
import com.axis.model.Partner
import com.axis.model.PartnerDetail
import com.axis.repository.TransactionRepository
import com.axis.service.PartnerService
import io.swagger.annotations.ApiOperation
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@CrossOrigin
@RestController
@RequestMapping("/api")
class PartnerController(
    @Autowired val partnerService: PartnerService,
    @Autowired val transactionRepository: TransactionRepository
) {
    var logger = LoggerFactory.getLogger(this.javaClass)

    @ApiOperation("conntection test")
    @GetMapping("/echo")
    fun echo(): String {
        return "Hello from Spring-boot, AZURE KUBERNETES SERVICE 12."
    }

    @ApiOperation("add a partner by giving all details")
    @PostMapping("/add-partner")
    fun addPartner(@RequestBody partner: Partner): Partner {
        return partnerService.addPartner(partner)
    }

    @ApiOperation("fetches all the partners")
    @GetMapping("/get-partners/all")
    fun getPartners(): List<Partner> {
        return partnerService.getAll()
    }

    @ApiOperation("fetches all the 'available' partner of a particular insurance type")
    @GetMapping("/get-partners/{type}")
    fun getPartner(@PathVariable type: String): List<Partner> {
        logger.info("\n\n-<<[ endpoint:/api/get-partners/{type},FETCHING PARTNERS.. ] >>-\n\n")
        return partnerService.getPartnerByType(type)
    }

    @ApiOperation("fetches quote by partner-id")
    @PostMapping("/get-quote/{id}")
    fun getQuote(@RequestBody formData: String, @PathVariable id: Int): String {
        val msg = partnerService.getQuotes(id, formData)
        logger.info("\n\n-<<[ endpoint:/api/get-quote/{id},FETCHING Particular QUOTE.. ] >>-\n\n")
        logger.info("\n\n-<<[ endpoint:/api/get-quote/{id},QUOTE:: ${msg.substring(1, msg.length - 1)} ] >>-\n\n")
        return msg
    }

    @ApiOperation("fetches partners quotes. used in compare quotes.")
    @PostMapping("/get-quotes/{type}/{id}")
    fun getQuotes(@RequestBody formData: String, @PathVariable type: String, @PathVariable id: Int): List<String> {
        logger.info("\n\n-<<[ endpoint:/api/get-quotes/{type}/{id},FETCHING QUOTES FROM OTHER PARTNERS.. ] >>-\n\n")
        return partnerService.getMultipleQuotes(formData, type, id)
    }

    @ApiOperation("check the details of the current partner form and check what else is required by the other partners.(before) actually filling the form")
    @GetMapping("/get-additional-fields/{id}")
    fun getAdditionalFields(@PathVariable id: Int): List<String> {
        logger.info("\n\n-<<[ endpoint:/api/get-additional-fields/{id},FETCHING additional fields required.. ] >>-\n\n")
        return partnerService.getAdditionalFields(id)
    }

    @ApiOperation("Unique partners list.")
    @GetMapping("/describe-partners")
    fun getPartnersDescription(): List<PartnerDetail>? {
        logger.info("\n\n-<<[ endpoint:/api/describe-partners FETCHING PARTNERS DETAILS..]>>-\n\n")
        return partnerService.getPartnersDetails()
    }

    @ApiOperation("Get all the endpoints status.")
    @GetMapping("/endpoints/status")
    fun getEndpointsStatus(): List<EndPointsStatus>? {
        return partnerService.getEndPointsStatus()
    }
    @ApiOperation("fetches different products name. queries partner database.")
    @GetMapping("/products/distinct")
    fun getProducts(): MutableList<Any> {
        return partnerService.getDistinctProduct()
    }


}