package com.axis.model

import io.swagger.annotations.ApiModel
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "partners")
@ApiModel(description = "Partners-details")
class Partner(
    @Id var id: Int,
    val logo: String,
    var name: String,
    var description: String,
    var insuranceType: String,
    var endPoints: String, var feilds: String, var available:Boolean, var requestBody:String?
) {
    override fun toString(): String {
        return "Partner(logo='$logo', name='$name', description='$description', insuranceType='$insuranceType', endPoints='$endPoints', feilds='$feilds')"
    }

    companion object {
        const val SEQUENCE_NAME: String = "partner_sequence"
    }
}