package com.axis.repository

import com.axis.model.Transaction
import org.bson.Document
import org.springframework.data.mongodb.core.aggregation.AggregationResults
import org.springframework.data.mongodb.repository.Aggregation
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface TransactionRepository:MongoRepository<Transaction,Int> {
    @Aggregation(pipeline = ["{\$group:{_id:'\$category',sum:{\$sum:'\$amount' }}}", "{\$sort:{sum:-1}}"])
    fun getCategoryWiseEarnings(): AggregationResults<Document?>?
    @Aggregation(pipeline = ["{\$group:{_id:'\$partnerName',sum:{\$sum:'\$amount' }}}", "{\$sort:{sum:-1}}"])
    fun getPartnerWiseEarnings(): AggregationResults<Document?>?
    @Aggregation(pipeline = ["{\$group:{_id:{type:\"\$category\",month:{\$month:\"\$purchaseDate\"},year:{\$year:\"\$purchaseDate\"}}, count:{\$sum:1}}}"])
    fun getDateWiseEarnings():AggregationResults<Document?>?

}