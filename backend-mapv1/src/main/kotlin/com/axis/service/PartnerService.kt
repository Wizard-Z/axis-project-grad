package com.axis.service

import com.axis.model.EndPointsStatus
import com.axis.model.Partner
import com.axis.model.PartnerDetail
import com.axis.model.Transaction
import com.axis.repository.PartnerListRepository
import com.axis.repository.PartnerRepository
import com.axis.repository.TransactionRepository
import khttp.post
import org.json.JSONObject
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.mongodb.core.MongoTemplate
import org.springframework.data.mongodb.core.query.Criteria
import org.springframework.data.mongodb.core.query.Query

import org.springframework.stereotype.Service
import java.io.IOException
import java.net.HttpURLConnection
import java.net.MalformedURLException
import java.net.URL
import khttp.responses.Response
import org.json.JSONArray
import java.time.LocalDateTime


@Service
class PartnerService(
    @Autowired val partnerRepository: PartnerRepository,
    @Autowired val sequenceGeneratorService: SequenceGeneratorService,
    @Autowired val mongoTemplate: MongoTemplate,
    @Autowired val partnerListRepository: PartnerListRepository,
    @Autowired val transactionRepository: TransactionRepository

) {
    final val SITE_IS_UP = "UP"
    final val SITE_IS_DOWN = "DOWN"
    final val INCORRECT_URL = "Wrong URL."
    final val INCORRECT_FIELD = "Field mismatch!"


    var logger = LoggerFactory.getLogger(this.javaClass)

    fun addPartner(partner: Partner): Partner {
        partner.id =
            if (partner.id < 100) sequenceGeneratorService.generateSequence(Partner.SEQUENCE_NAME) + 100 else partner.id

        if (getPartnerDetails(partner.name) == null)
            partnerListRepository.save(PartnerDetail(0, partner.name, partner.logo, partner.description))

        logger.info("\n\n--<<(ADDING.. PARTNER name: ${partner.name})>>--$partner\n\n")
        return partnerRepository.save(partner)
    }

    fun getAll(): List<Partner> {
        val partners = partnerRepository.findAll()
        logger.info("\n\n--<<(GETTING.. ALL PARTNERS)>>\n\n")
        return partners
    }


    fun findById(id: Int): Partner {
        return partnerRepository.findById(id).orElseThrow { Exception("Partner turned down") }
    }

    fun fetchPartnerQuote(endPoint: String, formData: String, requestBody: String?): List<String> {

        val response = mutableListOf<String>()
        val reqBodyOld = JSONObject(requestBody).toMap()
        val reqBodyNew = mutableMapOf<String, String?>()
        logger.info("\n\n--<<(REQUEST-BODY-MAP -> $reqBodyOld)>>\n\n")


        try {
            println("formData: $formData")
            val jsonObj = JSONObject(formData).toMap()
            //1. request body
            logger.info("\n\n--<<(CAPTURED FORM DATA:JSON-MAP is ${jsonObj["formData"]})>>\n\n")

            val forms = jsonObj["formData"] as MutableMap<*, *>?
            reqBodyOld?.entries?.forEach {
                reqBodyNew[it.key] = forms?.get(reqBodyOld[it.key]).toString()
            }
            println("---requiredFields---")
            reqBodyNew.entries.forEach {
                if (it.value == "null")
                    println(reqBodyOld[it.key])
            }
            logger.info("\n\n--<<(POST-REQUEST-BODY -> $reqBodyNew)>>\n\n")

            println("Am I mutableMap? ${forms is MutableMap<*, *>}")

            val res: Response = post(url = endPoint, json = reqBodyNew)
            val responseCode = res.statusCode
            val text = res.text
            logger.info("\n\n--<<(STATUS: $responseCode RESPONSE: $text)>>\n\n")

            val responseCodeCat: Int = responseCode / 100
            response.add(responseCodeCat.toString())
            if (responseCodeCat == 2 || responseCodeCat == 3) {
                response.add(SITE_IS_UP)
                response.add(text)
            } else
                response.add(SITE_IS_DOWN)
        } catch (e: MalformedURLException) {
            response.add(INCORRECT_URL)
        } catch (e: IOException) {
            response.add(SITE_IS_DOWN + ":${e.message}")
        }
        return response
    }

    fun getQuotes(id: Int, formData: String): String {
        val partner = findById(id)
        val insuranceType = partner.insuranceType
        val response = fetchPartnerQuote(partner.endPoints, formData, partner.requestBody)
        try {
            return if (response[0] == "2" || response[0] == "3") {

                val logo = partner.logo
                var msg = response[2]


                msg = msg.substring(
                    0,
                    msg.length - 2
                ) + "," + "\"logo\":" + "\"" + logo + "\"" + msg.substring(msg.length - 2)
                println("InSERIVICE: $msg")
                val price = JSONObject(msg.substring(1, msg.length - 1)).get("price").toString()
                transactionRepository.save(Transaction(0, price.toDouble(), insuranceType, partner.name, LocalDateTime.now()))
                msg

            } else
                SITE_IS_DOWN
        } catch (e: Exception) {
            return INCORRECT_FIELD
        }
    }
    fun getMultipleQuotes(formData: String, type:String, id:Int):List<String>{
        val partners = getPartnerByType(type)
        val quotes: MutableList<String> = mutableListOf()
        var quote: String
        logger.info("\n\n-<<[MULTIQUOTES: Captured Form Data --$formData]>>-\n\n")
        for (partner in partners) {
            if (partner.id != id) {
                quote = getQuotes(partner.id, formData)
                quote = quote.substring(1, (quote.length - 1))
                quotes.add(quote)
            }
        }
        println(quotes)
        return quotes
    }
    //TODO: Naming conventions..
    fun getAdditionalFields(id:Int):List<String>{
        val currentPartner = findById(id)
        val partners = getPartnerByType(currentPartner.insuranceType)
        val currentRequestBody = JSONObject(currentPartner.requestBody).toMap()
        var reqBody: MutableMap<*, *>
        var requestBodyValues: MutableCollection<Any>
        val fields = mutableListOf<String>()
        for (partner in partners) {
            if (partner.id != id) {
                reqBody = JSONObject(partner.requestBody).toMap()
                requestBodyValues = reqBody.values
                requestBodyValues.removeIf {
                    it in currentRequestBody.values
                }
                logger.info("\n\n-<<[I am ${partner.name} and I need $requestBodyValues]>>-\n\n")
                val partnerFieldsJson = JSONObject(partner.feilds).get("fields") as JSONArray

                for (i in 0 until partnerFieldsJson.length()) {
                    val item = partnerFieldsJson.getJSONObject(i)
                    if (item.get("name") in requestBodyValues && item !in fields) {
                        println("~~~ $item")
                        fields.add(item.toString())
                    }
                }

            }
        }
        val returnArray = fields.distinct()
        logger.info("\n\n-<<[Is that what you finally want??${fields.distinct()}]>>-\n\n")
        return returnArray

    }

    fun getPartnerByType(type: String): List<Partner> {
        logger.info("\n\n--<<(QUERY: partnerByTypeAvailable)>>\n\n")
        val qry = Query()
        qry.addCriteria(Criteria.where("insuranceType").`is`(type).and("available").`is`(true))
        return mongoTemplate.find(qry, Partner::class.java)
    }

    fun getDistinctProduct(): MutableList<Any> {
        return mongoTemplate.query(Partner::class.java).distinct("insuranceType").all()
    }

    fun findByName(name: String): List<Partner>? {
        return partnerRepository.findByName(name)
    }

    fun getPartnerDetails(name: String): PartnerDetail? {
        return partnerListRepository.findByName(name)
    }

    fun getPartnersDetails(): List<PartnerDetail>? {
        return partnerListRepository.findAll()
    }

    fun getEndPointsStatus(): List<EndPointsStatus> {

        val partners = getAll()
        val endPointStatus = mutableListOf<EndPointsStatus>()
        var response: List<String>
        partners.forEach {
            response = fetchUrl(it.endPoints)
            endPointStatus.add(
                EndPointsStatus(
                    it.name,
                    it.endPoints,
                    if (response.size > 1) response[1] else response[0]
                )
            )
        }
        return endPointStatus
    }

    fun fetchUrl(url: String): List<String> {
        val response = mutableListOf<String>()
        try {
            val urlObj: URL = URL(url)
            val conn: HttpURLConnection = urlObj.openConnection() as HttpURLConnection
            conn.requestMethod = "GET"
            conn.connect()
            val responseCodeCat: Int = conn.responseCode / 100
            println("responsecode: $responseCodeCat")
            response.add(responseCodeCat.toString())
            if (responseCodeCat == 2 || responseCodeCat == 3) {
                response.add(SITE_IS_UP)
                response.add(urlObj.readText())
            } else
                response.add(SITE_IS_DOWN)
            conn.disconnect()

        } catch (e: MalformedURLException) {
            response.add(INCORRECT_URL)
        } catch (e: IOException) {
            response.add(SITE_IS_DOWN + ":${e.message}")
        }
        return response

    }


}





