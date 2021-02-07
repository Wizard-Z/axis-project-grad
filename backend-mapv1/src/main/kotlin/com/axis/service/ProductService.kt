package com.axis.service

import com.axis.model.Product
import com.axis.repository.ProductRepository
import com.axis.repository.TransactionRepository
import org.bson.Document
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class ProductService(@Autowired val productRepository: ProductRepository) {
    fun addProduct(product:Product):Product{
        return productRepository.save(product)
    }

    fun getAllAvailable():List<Product?>{
        return productRepository.getAllAvailable()
    }

    fun getAll():List<Product?>{
        return productRepository.findAll()
    }


}