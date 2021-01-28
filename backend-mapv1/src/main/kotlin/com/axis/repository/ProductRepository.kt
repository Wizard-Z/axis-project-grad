package com.axis.repository

import com.axis.model.Product
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.mongodb.repository.Query
import org.springframework.stereotype.Repository

@Repository
interface ProductRepository:MongoRepository<Product,Int> {
    @Query(value="{available:true}")
    fun getAllAvailable():List<Product?>
}