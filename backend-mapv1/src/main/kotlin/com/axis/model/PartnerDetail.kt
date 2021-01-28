package com.axis.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.stereotype.Component


@Document(collection="partnersdescribe")
class PartnerDetail(@Id var id:Int, var name:String, var logo:String, var description:String) {

    companion object {
        const val SEQUENCE_NAME: String = "partner_desc_sequence"
    }
}