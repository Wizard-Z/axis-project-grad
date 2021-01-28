
package com.axis.service

import com.axis.model.Partner
import com.axis.model.PartnerDetail
import com.axis.repository.PartnerListRepository
import com.axis.repository.PartnerRepository
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.mockito.Mockito
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.mock.mockito.MockBean
import org.springframework.boot.test.mock.mockito.SpyBean
import org.springframework.data.mongodb.core.MongoTemplate
import org.springframework.data.mongodb.core.query.Criteria
import org.springframework.data.mongodb.core.query.Query
import java.util.*

@AutoConfigureMockMvc
@SpringBootTest
class PartnerServiceTest {

    @Autowired
    var partnerService: PartnerService? = null

    @MockBean
    var partnerRepository: PartnerRepository? = null

    @MockBean
    var partnerListRepository: PartnerListRepository? = null

    @SpyBean
    var mongoTemplate:MongoTemplate?=null

    @Test
    fun getAllTest() {
        val partnerList: MutableList<Partner> = ArrayList()

        partnerList.add(
                Partner(
                        138,
                        "https://tinyurl.com/ya22aob9",
                        "AXIS MOTOR",
                        "Get Affordable Insurance Plans for Car, Bike, Health & Travel with the Trust of TATA. Quick & Hassle-Free Online Process with No Paperwork. 5 Cr+ Happy Customers. Get Quote. Zero Touch Insurance. Policy in 3 iteps. Comprehensive Plans.",
                        "CarInsurance",
                        "http://localhost:8089/motor-axis-insure/quotes",
                        "{\"fields\": [ { \"label\":\"City\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"city\", \"placeholder\":\" Enter City eg (Delhi or Mumbai)\",\"validation\":{\"required\":\"city is mandatory\" }}, { \"label\":\"RTO\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"RTO\", \"placeholder\":\" Enter RTO eg (DL01 or MH01)\" ,\"validation\":{\"required\":\"RTO is mandatory\" }}, { \"label\":\"Brand Name\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"brandName\", \"placeholder\":\" Enter Brand Name eg (Hyundai or Audi)\",\"validation\":{\"required\":\"Brand Name is mandatory\" } }, { \"label\":\"Fuel Type\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"fuelType\", \"placeholder\":\" Enter Fuel type eg (Petrol or Diesel)\",\"validation\":{\"required\":\"Fuel Type is mandatory\" } }, { \"label\":\"Model Year\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"modelYear\", \"placeholder\":\" Enter Model Year\",\"validation\":{\"required\":\"Model is mandatory\" } } ]}",
                        true,
                        "{\"City\":\"city\",\"RTO\":\"RTO\",\"Name\":\"brandName\",\"Type\":\"fuelType\",\"Year\":\"modelYear\",\"Phone\":\"phoneNumber\"}"
                )
        );
        partnerList.add(
                Partner(
                        139,
                        "https://tinyurl.com/ydgvjpgx",
                        "BHARTI AXA",
                        "Claim Service of the Year Award. Buy New/Renew Car, Health & Bike Insurance Online Now. Get Comprehensive Insurance Solutions by Bharti AXA. 27Lacs+ Claim Settled.",
                        "TravelInsurance",
                        "http://localhost:8089/travel-bharti-axa/quotes",
                        "{\"fields\": [ { \"label\":\"Destination\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"destination\", \"placeholder\":\"Where you wish to travel..\",\"validation\":{\"required\":\"*Destination is mandatory\" }},{ \"label\":\"Travellers\", \"id\":\"tex\", \"type\":\"number\", \"name\":\"travellers\", \"placeholder\":\"Number of Travellers\",\"validation\":{\"required\":\"*Travellers is mandatory\" }},{ \"label\":\"Journey Start Date\", \"id\":\"tex\", \"type\":\"date\", \"name\":\"startDate\", \"placeholder\":\"Enter journey start Date\",\"validation\":{\"required\":\"*Journey Date is mandatory\" }},{ \"label\":\"Return Date\", \"id\":\"tex\", \"type\":\"date\", \"name\":\"returnDate\", \"placeholder\":\"Enter return date\",\"validation\":{\"required\":\"*Return date is mandatory\" }},{ \"label\":\"Phone Number\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"phoneNumber\", \"placeholder\":\"Enter Phone Number\",\"validation\":{\"required\":\"*Phone is mandatory\" }} ]}",
                        true,
                        "{\"City\":\"city\",\"RTO\":\"RTO\",\"Name\":\"brandName\",\"Type\":\"fuelType\",\"Year\":\"modelYear\",\"Phone\":\"phoneNumber\"}"
                )
        );

        Mockito.`when`(
                partnerRepository
                        ?.findAll()
        ).thenReturn(partnerList)
        assertEquals(
                2, partnerService?.getAll()
                ?.size
        )


    }

    @Test
    fun findByIdTest() {
        val partner = Partner(
                138,
                "https://tinyurl.com/ya22aob9",
                "AXIS MOTOR",
                "Get Affordable Insurance Plans for Car, Bike, Health & Travel with the Trust of TATA. Quick & Hassle-Free Online Process with No Paperwork. 5 Cr+ Happy Customers. Get Quote. Zero Touch Insurance. Policy in 3 iteps. Comprehensive Plans.",
                "CarInsurance",
                "http://localhost:8089/motor-axis-insure/quotes",
                "{\"fields\": [ { \"label\":\"City\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"city\", \"placeholder\":\" Enter City eg (Delhi or Mumbai)\",\"validation\":{\"required\":\"city is mandatory\" }}, { \"label\":\"RTO\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"RTO\", \"placeholder\":\" Enter RTO eg (DL01 or MH01)\" ,\"validation\":{\"required\":\"RTO is mandatory\" }}, { \"label\":\"Brand Name\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"brandName\", \"placeholder\":\" Enter Brand Name eg (Hyundai or Audi)\",\"validation\":{\"required\":\"Brand Name is mandatory\" } }, { \"label\":\"Fuel Type\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"fuelType\", \"placeholder\":\" Enter Fuel type eg (Petrol or Diesel)\",\"validation\":{\"required\":\"Fuel Type is mandatory\" } }, { \"label\":\"Model Year\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"modelYear\", \"placeholder\":\" Enter Model Year\",\"validation\":{\"required\":\"Model is mandatory\" } } ]}",
                true,
                "{\"City\":\"city\",\"RTO\":\"RTO\",\"Name\":\"brandName\",\"Type\":\"fuelType\",\"Year\":\"modelYear\",\"Phone\":\"phoneNumber\"}"
        );

        partnerRepository
                ?.save(partner);
        val id = 138
        Mockito.`when`(partnerRepository?.findById(138)).thenReturn(Optional.of(partner))
        assertEquals(id, partnerService?.findById(138)?.id)

    }

    @Test
    fun findByNameTest() {
        val partnerList: MutableList<Partner> = ArrayList()


        partnerList.add(
                Partner(
                        138,
                        "https://tinyurl.com/ya22aob9",
                        "AXIS MOTOR",
                        "Get Affordable Insurance Plans for Car, Bike, Health & Travel with the Trust of TATA. Quick & Hassle-Free Online Process with No Paperwork. 5 Cr+ Happy Customers. Get Quote. Zero Touch Insurance. Policy in 3 iteps. Comprehensive Plans.",
                        "CarInsurance",
                        "http://localhost:8089/motor-axis-insure/quotes",
                        "{\"fields\": [ { \"label\":\"City\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"city\", \"placeholder\":\" Enter City eg (Delhi or Mumbai)\",\"validation\":{\"required\":\"city is mandatory\" }}, { \"label\":\"RTO\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"RTO\", \"placeholder\":\" Enter RTO eg (DL01 or MH01)\" ,\"validation\":{\"required\":\"RTO is mandatory\" }}, { \"label\":\"Brand Name\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"brandName\", \"placeholder\":\" Enter Brand Name eg (Hyundai or Audi)\",\"validation\":{\"required\":\"Brand Name is mandatory\" } }, { \"label\":\"Fuel Type\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"fuelType\", \"placeholder\":\" Enter Fuel type eg (Petrol or Diesel)\",\"validation\":{\"required\":\"Fuel Type is mandatory\" } }, { \"label\":\"Model Year\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"modelYear\", \"placeholder\":\" Enter Model Year\",\"validation\":{\"required\":\"Model is mandatory\" } } ]}",
                        true,
                        "{\"City\":\"city\",\"RTO\":\"RTO\",\"Name\":\"brandName\",\"Type\":\"fuelType\",\"Year\":\"modelYear\",\"Phone\":\"phoneNumber\"}"
                )
        );


        Mockito.`when`(partnerRepository?.findByName("AXIS MOTOR")).thenReturn(partnerList)
        assertEquals(1, partnerService?.findByName("AXIS MOTOR")?.size)

    }

    @Test
    fun getPartnerDetailTest() {


        val partnerDetail = PartnerDetail(
                138,
                "AXIS MOTOR",
                "https://tinyurl.com/ya22aob9",
                "Get Affordable Insurance Plans for Car, Bike, Health & Travel with the Trust of TATA. Quick & Hassle-Free Online Process with No Paperwork. 5 Cr+ Happy Customers. Get Quote. Zero Touch Insurance. Policy in 3 iteps. Comprehensive Plans.",
        );


        Mockito.`when`(partnerListRepository?.findByName("AXIS MOTOR")).thenReturn(partnerDetail);
        assertEquals("AXIS MOTOR", partnerService?.getPartnerDetails("AXIS MOTOR")?.name);

    }

    @Test
    fun getPartnersDetailsTest() {
        val partnerDetailsList: MutableList<PartnerDetail> = ArrayList()
        partnerDetailsList.add(
                PartnerDetail(
                        138,
                        "AXIS MOTOR",
                        "https://tinyurl.com/ya22aob9",
                        "Get Affordable Insurance Plans for Car, Bike, Health & Travel with the Trust of TATA. Quick & Hassle-Free Online Process with No Paperwork. 5 Cr+ Happy Customers. Get Quote. Zero Touch Insurance. Policy in 3 iteps. Comprehensive Plans.",
                )
        );
        partnerDetailsList.add(
                PartnerDetail(
                        139,
                        "BHARTI AXA",
                        "https://tinyurl.com/ydgvjpgx",
                        "Claim Service of the Year Award. Buy New/Renew Car, Health & Bike Insurance Online Now. Get Comprehensive Insurance Solutions by Bharti AXA. 27Lacs+ Claim Settled.",
                )
        );
        Mockito.`when`(partnerListRepository?.findAll()).thenReturn(partnerDetailsList);
        assertEquals(2, partnerService?.getPartnersDetails()?.size)

    }

    @Test
    fun addPartnerTest() {
        val partner = Partner(
                138,
                "https://tinyurl.com/ya22aob9",
                "AXIS MOTOR",
                "Get Affordable Insurance Plans for Car, Bike, Health & Travel with the Trust of TATA. Quick & Hassle-Free Online Process with No Paperwork. 5 Cr+ Happy Customers. Get Quote. Zero Touch Insurance. Policy in 3 iteps. Comprehensive Plans.",
                "CarInsurance",
                "http://localhost:8089/motor-axis-insure/quotes",
                "{\"fields\": [ { \"label\":\"City\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"city\", \"placeholder\":\" Enter City eg (Delhi or Mumbai)\",\"validation\":{\"required\":\"city is mandatory\" }}, { \"label\":\"RTO\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"RTO\", \"placeholder\":\" Enter RTO eg (DL01 or MH01)\" ,\"validation\":{\"required\":\"RTO is mandatory\" }}, { \"label\":\"Brand Name\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"brandName\", \"placeholder\":\" Enter Brand Name eg (Hyundai or Audi)\",\"validation\":{\"required\":\"Brand Name is mandatory\" } }, { \"label\":\"Fuel Type\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"fuelType\", \"placeholder\":\" Enter Fuel type eg (Petrol or Diesel)\",\"validation\":{\"required\":\"Fuel Type is mandatory\" } }, { \"label\":\"Model Year\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"modelYear\", \"placeholder\":\" Enter Model Year\",\"validation\":{\"required\":\"Model is mandatory\" } } ]}",
                true,
                "{\"City\":\"city\",\"RTO\":\"RTO\",\"Name\":\"brandName\",\"Type\":\"fuelType\",\"Year\":\"modelYear\",\"Phone\":\"phoneNumber\"}"
        );
        Mockito.`when`(partnerRepository?.save(partner)).thenReturn(partner)

        assertThat(partnerService?.addPartner(partner)).isEqualTo(partner)

    }
    @Test
    fun getPartnerByType(){
        val partnerList: MutableList<Partner> = ArrayList()


        partnerList.add(
                Partner(
                        138,
                        "https://tinyurl.com/ya22aob9",
                        "AXIS MOTOR",
                        "Get Affordable Insurance Plans for Car, Bike, Health & Travel with the Trust of TATA. Quick & Hassle-Free Online Process with No Paperwork. 5 Cr+ Happy Customers. Get Quote. Zero Touch Insurance. Policy in 3 iteps. Comprehensive Plans.",
                        "CarInsurance",
                        "http://localhost:8089/motor-axis-insure/quotes",
                        "{\"fields\": [ { \"label\":\"City\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"city\", \"placeholder\":\" Enter City eg (Delhi or Mumbai)\",\"validation\":{\"required\":\"city is mandatory\" }}, { \"label\":\"RTO\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"RTO\", \"placeholder\":\" Enter RTO eg (DL01 or MH01)\" ,\"validation\":{\"required\":\"RTO is mandatory\" }}, { \"label\":\"Brand Name\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"brandName\", \"placeholder\":\" Enter Brand Name eg (Hyundai or Audi)\",\"validation\":{\"required\":\"Brand Name is mandatory\" } }, { \"label\":\"Fuel Type\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"fuelType\", \"placeholder\":\" Enter Fuel type eg (Petrol or Diesel)\",\"validation\":{\"required\":\"Fuel Type is mandatory\" } }, { \"label\":\"Model Year\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"modelYear\", \"placeholder\":\" Enter Model Year\",\"validation\":{\"required\":\"Model is mandatory\" } } ]}",
                        true,
                        "{\"City\":\"city\",\"RTO\":\"RTO\",\"Name\":\"brandName\",\"Type\":\"fuelType\",\"Year\":\"modelYear\",\"Phone\":\"phoneNumber\"}"
                )
        );
        val type="CarInsurance"
        val qry = Query()
        qry.addCriteria(Criteria.where("insuranceType").`is`(type).and("available").`is`(true))

        Mockito.`when`(mongoTemplate?.find(qry, Partner::class.java)).thenReturn(partnerList)
        assertEquals(1, partnerService?.getPartnerByType(type)?.size)

    }

    @Test
    fun getDistinctProductTest()
    {
        val partnerList: MutableList<Partner> = ArrayList()

        partnerList.add(
                Partner(
                        138,
                        "https://tinyurl.com/ya22aob9",
                        "AXIS MOTOR",
                        "Get Affordable Insurance Plans for Car, Bike, Health & Travel with the Trust of TATA. Quick & Hassle-Free Online Process with No Paperwork. 5 Cr+ Happy Customers. Get Quote. Zero Touch Insurance. Policy in 3 iteps. Comprehensive Plans.",
                        "CarInsurance",
                        "http://localhost:8089/motor-axis-insure/quotes",
                        "{\"fields\": [ { \"label\":\"City\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"city\", \"placeholder\":\" Enter City eg (Delhi or Mumbai)\",\"validation\":{\"required\":\"city is mandatory\" }}, { \"label\":\"RTO\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"RTO\", \"placeholder\":\" Enter RTO eg (DL01 or MH01)\" ,\"validation\":{\"required\":\"RTO is mandatory\" }}, { \"label\":\"Brand Name\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"brandName\", \"placeholder\":\" Enter Brand Name eg (Hyundai or Audi)\",\"validation\":{\"required\":\"Brand Name is mandatory\" } }, { \"label\":\"Fuel Type\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"fuelType\", \"placeholder\":\" Enter Fuel type eg (Petrol or Diesel)\",\"validation\":{\"required\":\"Fuel Type is mandatory\" } }, { \"label\":\"Model Year\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"modelYear\", \"placeholder\":\" Enter Model Year\",\"validation\":{\"required\":\"Model is mandatory\" } } ]}",
                        true,
                        "{\"City\":\"city\",\"RTO\":\"RTO\",\"Name\":\"brandName\",\"Type\":\"fuelType\",\"Year\":\"modelYear\",\"Phone\":\"phoneNumber\"}"
                )
        );
        partnerList.add(
                Partner(
                        139,
                        "https://tinyurl.com/ydgvjpgx",
                        "BHARTI AXA",
                        "Claim Service of the Year Award. Buy New/Renew Car, Health & Bike Insurance Online Now. Get Comprehensive Insurance Solutions by Bharti AXA. 27Lacs+ Claim Settled.",
                        "TravelInsurance",
                        "http://localhost:8089/travel-bharti-axa/quotes",
                        "{\"fields\": [ { \"label\":\"Destination\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"destination\", \"placeholder\":\"Where you wish to travel..\",\"validation\":{\"required\":\"*Destination is mandatory\" }},{ \"label\":\"Travellers\", \"id\":\"tex\", \"type\":\"number\", \"name\":\"travellers\", \"placeholder\":\"Number of Travellers\",\"validation\":{\"required\":\"*Travellers is mandatory\" }},{ \"label\":\"Journey Start Date\", \"id\":\"tex\", \"type\":\"date\", \"name\":\"startDate\", \"placeholder\":\"Enter journey start Date\",\"validation\":{\"required\":\"*Journey Date is mandatory\" }},{ \"label\":\"Return Date\", \"id\":\"tex\", \"type\":\"date\", \"name\":\"returnDate\", \"placeholder\":\"Enter return date\",\"validation\":{\"required\":\"*Return date is mandatory\" }},{ \"label\":\"Phone Number\", \"id\":\"tex\", \"type\":\"text\", \"name\":\"phoneNumber\", \"placeholder\":\"Enter Phone Number\",\"validation\":{\"required\":\"*Phone is mandatory\" }} ]}",
                        true,
                        "{\"City\":\"city\",\"RTO\":\"RTO\",\"Name\":\"brandName\",\"Type\":\"fuelType\",\"Year\":\"modelYear\",\"Phone\":\"phoneNumber\"}"
                )
        );

        Mockito.`when`(mongoTemplate?.query(Partner::class.java)?.distinct("insuranceType")?.all()).thenReturn(partnerList as List<Any>?)
        assertEquals(2, partnerService?.getDistinctProduct()?.size)

    }

}