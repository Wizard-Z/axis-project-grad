package com.axis.com.axis.repository

import com.axis.com.axis.model.PartnerDetail
import org.springframework.data.mongodb.repository.MongoRepository

interface PartnerListRepository: MongoRepository<PartnerDetail,Int>{
    fun findByName(name:String):PartnerDetail?

}