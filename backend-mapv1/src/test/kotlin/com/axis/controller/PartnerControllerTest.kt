
package com.axis.controller

import com.axis.model.Partner
import com.axis.service.PartnerService
import com.fasterxml.jackson.databind.ObjectMapper
import org.junit.Test

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.mock.mockito.MockBean
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultHandlers
import org.springframework.test.web.servlet.result.MockMvcResultMatchers
import java.util.*


@SpringBootTest
@AutoConfigureMockMvc


class PartnerControllerTest
{

    @MockBean
    val partnerService: PartnerService?=null

    @Autowired
    private val mvc: MockMvc? = null


    @Test
    @Throws(Exception::class)
    fun getPartnersTest() {
        mvc?.perform(MockMvcRequestBuilders
                .get("/test/get-partners/all")
                .accept(MediaType.APPLICATION_ATOM_XML))
                ?.andDo(MockMvcResultHandlers.print())
                ?.andExpect(MockMvcResultMatchers.status().isOk());



    }

    @Test
    @Throws(java.lang.Exception::class)
    fun addPartnerTest() {
        val objectMapper = ObjectMapper()
        val partner=Partner(138, "https://tinyurl.com/ya22aob9", "AXIS MOTOR", "Get Affordable Insurance Plans for Car, Bike, Health & Travel with the Trust of TATA. Quick & Hassle-Free Online Process with No Paperwork. 5 Cr+ Happy Customers. Get Quote. Zero Touch Insurance. Policy in 3 iteps. Comprehensive Plans.",
                "CarInsurance", "http://localhost:8089/motor-axis-insure/quotes", "{\"fields\": [ { \"label\":\"City\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"city\", \"placeholder\":\" Enter City eg (Delhi or Mumbai)\",\"validation\":{\"required\":\"city is mandatory\" }}, { \"label\":\"RTO\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"RTO\", \"placeholder\":\" Enter RTO eg (DL01 or MH01)\" ,\"validation\":{\"required\":\"RTO is mandatory\" }}, { \"label\":\"Brand Name\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"brandName\", \"placeholder\":\" Enter Brand Name eg (Hyundai or Audi)\",\"validation\":{\"required\":\"Brand Name is mandatory\" } }, { \"label\":\"Fuel Type\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"fuelType\", \"placeholder\":\" Enter Fuel type eg (Petrol or Diesel)\",\"validation\":{\"required\":\"Fuel Type is mandatory\" } }, { \"label\":\"Model Year\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"modelYear\", \"placeholder\":\" Enter Model Year\",\"validation\":{\"required\":\"Model is mandatory\" } } ]}",
                true, "{\"City\":\"city\",\"RTO\":\"RTO\",\"Name\":\"brandName\",\"Type\":\"fuelType\",\"Year\":\"modelYear\",\"Phone\":\"phoneNumber\"}");


        mvc?.perform(MockMvcRequestBuilders
                .post("/test/add-partner").content(objectMapper.writeValueAsString(partner))
                .accept(MediaType.APPLICATION_ATOM_XML)
                .contentType(MediaType.APPLICATION_ATOM_XML))
                ?.andDo(MockMvcResultHandlers.print())
                ?.andExpect(MockMvcResultMatchers.status().isOk());

    }

    @Test
    @Throws(Exception::class)
    fun getPartnerTest() {
        mvc?.perform(MockMvcRequestBuilders
                .get("/test/get-partners/CarInsurance")
                .accept(MediaType.APPLICATION_ATOM_XML))
                ?.andDo(MockMvcResultHandlers.print())
                ?.andExpect(MockMvcResultMatchers.status().isOk());



    }
    @Test
    @Throws(Exception::class)
    fun getProductsTest() {
        mvc?.perform(MockMvcRequestBuilders
                .get("/test/products1")
                .accept(MediaType.APPLICATION_ATOM_XML))
                ?.andDo(MockMvcResultHandlers.print())
                ?.andExpect(MockMvcResultMatchers.status().isOk());



    }
    @Test
    @Throws(Exception::class)
    fun getPartnersDescriptionTest() {
        mvc?.perform(MockMvcRequestBuilders
                .get("/test/describe-partners")
                .accept(MediaType.APPLICATION_ATOM_XML))
                ?.andDo(MockMvcResultHandlers.print())
                ?.andExpect(MockMvcResultMatchers.status().isOk());



    }
    @Test
    @Throws(Exception::class)
    fun getEndpointsStatusTest() {
        mvc?.perform(MockMvcRequestBuilders
                .get("/test/endpoints/status")
                .accept(MediaType.APPLICATION_ATOM_XML))
                ?.andDo(MockMvcResultHandlers.print())
                ?.andExpect(MockMvcResultMatchers.status().isOk());



    }

    @Test
    @Throws(Exception::class)
    fun getQuoteTest() {
        val objectMapper = ObjectMapper()
        val partner=Partner(138, "https://tinyurl.com/ya22aob9", "AXIS MOTOR", "Get Affordable Insurance Plans for Car, Bike, Health & Travel with the Trust of TATA. Quick & Hassle-Free Online Process with No Paperwork. 5 Cr+ Happy Customers. Get Quote. Zero Touch Insurance. Policy in 3 iteps. Comprehensive Plans.",
                "CarInsurance", "http://localhost:8089/motor-axis-insure/quotes", "{\"fields\": [ { \"label\":\"City\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"city\", \"placeholder\":\" Enter City eg (Delhi or Mumbai)\",\"validation\":{\"required\":\"city is mandatory\" }}, { \"label\":\"RTO\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"RTO\", \"placeholder\":\" Enter RTO eg (DL01 or MH01)\" ,\"validation\":{\"required\":\"RTO is mandatory\" }}, { \"label\":\"Brand Name\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"brandName\", \"placeholder\":\" Enter Brand Name eg (Hyundai or Audi)\",\"validation\":{\"required\":\"Brand Name is mandatory\" } }, { \"label\":\"Fuel Type\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"fuelType\", \"placeholder\":\" Enter Fuel type eg (Petrol or Diesel)\",\"validation\":{\"required\":\"Fuel Type is mandatory\" } }, { \"label\":\"Model Year\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"modelYear\", \"placeholder\":\" Enter Model Year\",\"validation\":{\"required\":\"Model is mandatory\" } } ]}",
                true, "{\"City\":\"city\",\"RTO\":\"RTO\",\"Name\":\"brandName\",\"Type\":\"fuelType\",\"Year\":\"modelYear\",\"Phone\":\"phoneNumber\"}");

        val formData:String=""
        mvc?.perform(MockMvcRequestBuilders
                .post("/test/get-quote/138").content(objectMapper.writeValueAsString(formData))
                .accept(MediaType.APPLICATION_ATOM_XML)
                .contentType(MediaType.APPLICATION_ATOM_XML))
                ?.andDo(MockMvcResultHandlers.print())
                ?.andExpect(MockMvcResultMatchers.status().isOk());


    }

    @Test
    fun getAdditionalFieldsTest()
    {
        mvc?.perform(MockMvcRequestBuilders
                .get("/test/get-additional-fields/138")
                .accept(MediaType.APPLICATION_ATOM_XML))
                ?.andDo(MockMvcResultHandlers.print())
                ?.andExpect(MockMvcResultMatchers.status().isOk());


    }
    @Test
    @Throws(Exception::class)
    fun getQuotesTest() {
        val objectMapper = ObjectMapper()
        val partner=Partner(138, "https://tinyurl.com/ya22aob9", "AXIS MOTOR", "Get Affordable Insurance Plans for Car, Bike, Health & Travel with the Trust of TATA. Quick & Hassle-Free Online Process with No Paperwork. 5 Cr+ Happy Customers. Get Quote. Zero Touch Insurance. Policy in 3 iteps. Comprehensive Plans.",
                "CarInsurance", "http://localhost:8089/motor-axis-insure/quotes", "{\"fields\": [ { \"label\":\"City\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"city\", \"placeholder\":\" Enter City eg (Delhi or Mumbai)\",\"validation\":{\"required\":\"city is mandatory\" }}, { \"label\":\"RTO\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"RTO\", \"placeholder\":\" Enter RTO eg (DL01 or MH01)\" ,\"validation\":{\"required\":\"RTO is mandatory\" }}, { \"label\":\"Brand Name\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"brandName\", \"placeholder\":\" Enter Brand Name eg (Hyundai or Audi)\",\"validation\":{\"required\":\"Brand Name is mandatory\" } }, { \"label\":\"Fuel Type\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"fuelType\", \"placeholder\":\" Enter Fuel type eg (Petrol or Diesel)\",\"validation\":{\"required\":\"Fuel Type is mandatory\" } }, { \"label\":\"Model Year\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"modelYear\", \"placeholder\":\" Enter Model Year\",\"validation\":{\"required\":\"Model is mandatory\" } } ]}",
                true, "{\"City\":\"city\",\"RTO\":\"RTO\",\"Name\":\"brandName\",\"Type\":\"fuelType\",\"Year\":\"modelYear\",\"Phone\":\"phoneNumber\"}");

        val formData:String=""
        mvc?.perform(MockMvcRequestBuilders
                .post("/test/get-quotes/CarInsurance/138").content(objectMapper.writeValueAsString(formData))
                .accept(MediaType.APPLICATION_ATOM_XML)
                .contentType(MediaType.APPLICATION_ATOM_XML))
                ?.andDo(MockMvcResultHandlers.print())
                ?.andExpect(MockMvcResultMatchers.status().isOk());


    }


}
