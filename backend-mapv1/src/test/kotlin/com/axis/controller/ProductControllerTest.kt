
package com.axis.controller


import com.axis.model.Product
import com.axis.model.Transaction
import com.fasterxml.jackson.databind.ObjectMapper
import org.junit.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultHandlers.print
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status
import java.time.LocalDateTime


@SpringBootTest
@AutoConfigureMockMvc

class ProductControllerTest{

    @Autowired
    private val mvc: MockMvc? = null

    @Test
    @Throws(Exception::class)
    fun getAllAvailableProductsTest() {

        mvc?.perform(MockMvcRequestBuilders
                .get("/test/available/products")
                .accept(MediaType.APPLICATION_ATOM_XML))
                ?.andDo(print())
                ?.andExpect(status().isOk());




    }
    @Test
    @Throws(Exception::class)
    fun getAllProductsTest() {

        mvc?.perform(MockMvcRequestBuilders
                .get("/test/products")
                .accept(MediaType.APPLICATION_ATOM_XML))
                ?.andDo(print())
                ?.andExpect(status().isOk());




    }
    @Test
    @Throws(Exception::class)
    fun addProductTest() {
        val objectMapper = ObjectMapper()
        val product= Product(1, "https://tinyurl.com/ycgw4ghn", "Car Insurance", "Ensure peace of mind by purchasing a comprehensive Car Insurance policy to pay for repairs to your vehicle and third party liabilities. Make sure that expensive repairs to your vehicle do not dent your pocket.\n", true);

        mvc?.perform(MockMvcRequestBuilders
                .post("/test/addProduct").content(objectMapper.writeValueAsString(product))
                .accept(MediaType.APPLICATION_ATOM_XML)
                .contentType(MediaType.APPLICATION_ATOM_XML))
                ?.andDo(print())
                ?.andExpect(status().isOk());





    }

    @Test
    @Throws(Exception::class)
    fun getCategoryWiseEarningTest() {

        mvc?.perform(MockMvcRequestBuilders
                .get("/test/category-wise-earning")
                .accept(MediaType.APPLICATION_ATOM_XML))
                ?.andDo(print())
                ?.andExpect(status().isOk());




    }
    @Test
    @Throws(Exception::class)
    fun getPartnerWiseEarningTest() {

        mvc?.perform(MockMvcRequestBuilders
                .get("/test/partner-wise-earning")
                .accept(MediaType.APPLICATION_ATOM_XML))
                ?.andDo(print())
                ?.andExpect(status().isOk());




    }
    @Test
    @Throws(Exception::class)
    fun getDateWiseEarningTest() {

        mvc?.perform(MockMvcRequestBuilders
                .get("/test/date-wise-earning")
                .accept(MediaType.APPLICATION_ATOM_XML))
                ?.andDo(print())
                ?.andExpect(status().isOk());




    }
    @Test
    @Throws(Exception::class)
    fun addTransactionTest() {
        val objectMapper = ObjectMapper()
        val transaction= Transaction(1, 25000.0, "Car Insurance", "TATA AIG", LocalDateTime.of(2019, 3, 28, 14, 33, 48, 123456789));

        mvc?.perform(MockMvcRequestBuilders
                .post("/test/add-transaction").content(objectMapper.writeValueAsString(transaction))
                .accept(MediaType.APPLICATION_ATOM_XML)
                .contentType(MediaType.APPLICATION_ATOM_XML))
                ?.andDo(print())
                ?.andExpect(status().isOk());




    }
    @Test
    @Throws(Exception::class)
    fun getAllTransactionsTest() {

        mvc?.perform(MockMvcRequestBuilders
                .get("/test/transactions/all")
                .accept(MediaType.APPLICATION_ATOM_XML))
                ?.andDo(print())
                ?.andExpect(status().isOk());




    }
}