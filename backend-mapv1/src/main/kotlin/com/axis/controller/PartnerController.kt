package com.axis.controller


import com.axis.model.EndPointsStatus
import com.axis.model.Partner
import com.axis.model.PartnerDetail
import com.axis.model.Transaction
import com.axis.repository.TransactionRepository
import com.axis.service.PartnerService
import io.swagger.annotations.ApiOperation
import org.json.JSONObject
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

import java.time.LocalDateTime

import khttp.post
import khttp.get
import khttp.responses.Response
import org.json.JSONArray

@CrossOrigin
@RestController
class PartnerController(
    @Autowired val partnerService: PartnerService,
    @Autowired val transactionRepository: TransactionRepository
) {

    var logger = LoggerFactory.getLogger(this.javaClass)

    @ApiOperation(value = "test connection")
    @GetMapping("/echo")
    fun echo(): String {
        return "Hello from Spring-boot, AZURE KUBERNETS SERVICE-12"
    }

    @ApiOperation(value = "check url response")
    @PostMapping("/test/getME/")
    fun testMe(@RequestBody obj: String): String? {
        var returnMessage: String? = null
        println("obj: $obj")
        //1. request body
        val jsonObj = JSONObject(obj).toMap()
        println("JSON: $jsonObj")
        val url = "http://localhost:8089/motor-bhartiAxa/quotes/"
        println("value of FORMDATA: ${jsonObj["formData"]}")
        val response: Response = post(url = url, json = jsonObj["formData"])
        val statusCode = response.statusCode
        val text = response.text
        println("STATUS: $statusCode TEXT: $text")
        return returnMessage
    }


    @ApiOperation("add a partner by giving all details")
    @PostMapping("/test/add-partner")
    fun addPartner(@RequestBody partner: Partner): Partner {
        return partnerService.addPartner(partner)

    }

    @ApiOperation("fetches all the partners")
    @GetMapping("/test/get-partners/all")
    fun getPartners(): List<Partner> {
        return partnerService.getAll()
    }


    @ApiOperation("fetches quote by partner-id")
    @PostMapping("/test/get-quote/{id}")
    fun getQuote(@RequestBody formData: String, @PathVariable id: Int): String {
        val partner = partnerService.findById(id)
        val insuranceType = partner.insuranceType
        val msg = partnerService.getQuotes(partner, formData)
        println("MSG::" + msg.substring(1, msg.length - 1))
        val price = JSONObject(msg.substring(1, msg.length - 1)).get("price").toString()
        println("\n\n\nQUOTES: $insuranceType, $price, ${partner.name}")
        println("Captured Form DATA: $formData, id: $id")
        transactionRepository.save(Transaction(0, price.toDouble(), insuranceType, partner.name, LocalDateTime.now()))
        return msg

    }

    @ApiOperation("fetches all the available partner of a particular insurance type")
    @GetMapping("/test/get-partners/{type}")
    fun getPartner(@PathVariable type: String): List<Partner> {
        return partnerService.getPartnerByType(type)
    }

    @ApiOperation("fetches different products name. queries partner database.")
    @GetMapping("/test/products1")
    fun getProducts(): MutableList<Any> {
        return partnerService.getDistinctProduct()
    }

    @ApiOperation("check the details of the current partner form and check what else is required by the other partners.(before) actually fillling the form")
    @GetMapping("/test/get-additional-fields/{id}")
    fun getAdditionalFields(@PathVariable id: Int):List<String> {
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
                println("I am ${partner.name} and I need $lst")
                val x = JSONObject(partner.feilds).toMap()["fields"] as MutableCollection<*>
                val y = JSONObject(partner.feilds).get("fields") as JSONArray

                println("y::$y, y size ${y.length()} ")

                for (i in 0 until y.length()){
                    val item = y.getJSONObject(i)
                    if(item.get("name") in lst  && item !in field){
                        println("~~~ $item")
                        field.add(item.toString())
                    }
                }


            }
        }
        println("\n\n\n\nIs that you finally want??$field\n\n\n\n")
        return field


    }


    @ApiOperation("fetches partners quotes. used in compare quotes.")
    @PostMapping("/test/get-quotes/{type}/{id}")
    fun getQuotes(@RequestBody formData: String, @PathVariable type: String, @PathVariable id: Int): List<String> {
        val partners = partnerService.getPartnerByType(type)
        val quotes: MutableList<String> = mutableListOf()
        var quote: String
        // Here we are comparing with the filled form data and what is left!
        var reqBody: MutableMap<*, *>
        val formCollect = JSONObject(formData).toMap()["formData"] as MutableMap<*, *>?
        var lst: MutableCollection<Any>
        val field = mutableListOf<String>()

        for (partner in partners) {
            if (partner.id != id) {
                reqBody = JSONObject(partner.requestBody).toMap()
                println("requestBodyvalues: ${reqBody.values} formData keys: ${formCollect?.keys}")
                lst = reqBody.values
                lst.removeIf {
                    it in formCollect!!.keys
                }
                println("I am ${partner.name} and I need $lst")

                println("printing fields")
                var x = JSONObject(partner.feilds).toMap()["fields"] as MutableCollection<*>

                x.forEach { it1 ->
//                    println("::::$it1")
                    if (it1.toString().substring(1, it1.toString().length - 1).split(",").associate {
                            val (left, right) = it.split("=")
                            left to right
                        }["name"] in lst) {
                        println("~~$it1")
                        field.add(it1.toString())
                    }
                }
                println("FOUND SOMETHING:::: $field")

                println("\n\n")
                quote = partnerService.getQuotes(partner, formData)
                quote = quote.substring(1, (quote.length - 1))
                quotes.add(quote)
            }
        }
        println(quotes)
        println("\n\n\n\nIs that you finally want??${field.toSet()}\n\n\n\n")
        return quotes
    }

    @ApiOperation("Unique partners list.")
    @GetMapping("/test/describe-partners")
    fun getPartnersDescription(): List<PartnerDetail>? {
        return partnerService.getPartnersDetails()
    }

    @ApiOperation("Get all the endpoints status.")
    @GetMapping("/test/endpoints/status")
    fun getEndpointsStatus(): List<EndPointsStatus>? {
        return partnerService.getEndPointsStatus()
    }

}
