package com.axis.com.axis.repository

import com.axis.com.axis.model.Partner
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.mongodb.repository.Query
import org.springframework.stereotype.Repository

@Repository
interface PartnerRepository:MongoRepository<Partner,Int> {

    fun findByName(name:String):List<Partner>?



}