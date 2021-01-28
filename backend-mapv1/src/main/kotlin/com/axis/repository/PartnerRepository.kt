package com.axis.repository

import com.axis.model.Partner
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface PartnerRepository:MongoRepository<Partner,Int> {

    fun findByName(name:String):List<Partner>?



}