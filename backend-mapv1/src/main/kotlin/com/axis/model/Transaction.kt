package com.axis.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.time.LocalDateTime

@Document("transactions")
class Transaction(@Id var id:Int, var amount:Double, var category:String, var partnerName:String,var purchaseDate:LocalDateTime
) {



    companion object {
        const val SEQUENCE_NAME: String = "transaction_sequence"
    }
}