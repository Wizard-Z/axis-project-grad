package com.axis.repository

import com.axis.model.PartnerDetail
import org.springframework.data.mongodb.repository.MongoRepository

interface PartnerListRepository: MongoRepository<PartnerDetail,Int>{
    fun findByName(name:String):PartnerDetail?

}