package com.axis.controller

import org.junit.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultHandlers
import org.springframework.test.web.servlet.result.MockMvcResultMatchers

@SpringBootTest
@AutoConfigureMockMvc

class PartnerControllerNewTest {
    @Autowired
    private val mvc: MockMvc? = null

    @Test
    @Throws(Exception::class)
    fun getPartnerTest() {

        mvc?.perform(MockMvcRequestBuilders
                .get("/get-partners/CarInsurance")
                .accept(MediaType.APPLICATION_ATOM_XML))
                ?.andDo(MockMvcResultHandlers.print())
                ?.andExpect(MockMvcResultMatchers.status().isOk());




    }
    @Test
    @Throws(Exception::class)
    fun getAdditionalFieldsTest() {

        mvc?.perform(MockMvcRequestBuilders
                .get("/get-additional-fields/138")
                .accept(MediaType.APPLICATION_ATOM_XML))
                ?.andDo(MockMvcResultHandlers.print())
                ?.andExpect(MockMvcResultMatchers.status().isOk());




    }
    @Test
    @Throws(Exception::class)
    fun getPartnersDescriptionTest() {

        mvc?.perform(MockMvcRequestBuilders
                .get("/describe-partners")
                .accept(MediaType.APPLICATION_ATOM_XML))
                ?.andDo(MockMvcResultHandlers.print())
                ?.andExpect(MockMvcResultMatchers.status().isOk());




    }


}