package com.axis.controller

import com.axis.model.Product
import com.axis.model.Transaction
import com.axis.repository.ProductRepository
import com.axis.repository.TransactionRepository
import org.bson.Document
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@CrossOrigin
@RestController
class ProductController(
    @Autowired val productRepository: ProductRepository,
    @Autowired val transactionRepository: TransactionRepository
) {

    @PostMapping("/test/addProduct")
    fun addProduct(@RequestBody product: Product): Product {
        return productRepository.save(product)
    }

    @GetMapping("/test/available/products")
    fun getAllAvailableProducts(): List<Product?> {
        return productRepository.getAllAvailable()
    }

    @GetMapping("/test/products")
    fun getAllProducts(): List<Product?> {
        return productRepository.findAll()
    }

    @GetMapping("/test/category-wise-earning")
    fun getCategoryWiseEarning(): Document? {
        return transactionRepository.getCategoryWiseEarnings()?.rawResults
    }
    @GetMapping("/test/partner-wise-earning")
    fun getPartnerWiseEarning(): Document? {
        return transactionRepository.getPartnerWiseEarnings()?.rawResults
    }
    @GetMapping("/test/date-wise-earning")
    fun getDateWiseEarning(): Document? {
        return transactionRepository.getDateWiseEarnings()?.rawResults
    }
    @PostMapping("/test/add-transaction")
    fun addTransaction(@RequestBody transaction:Transaction): Transaction {
        return transactionRepository.save(transaction)
    }
    @GetMapping("/test/transactions/all")
    fun getAllTransactions():List<Transaction>{
        return transactionRepository.findAll()
    }


}