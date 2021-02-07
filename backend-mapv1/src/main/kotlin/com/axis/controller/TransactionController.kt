package com.axis.controller

import com.axis.model.Transaction
import com.axis.service.TransactionService
import org.bson.Document
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@CrossOrigin
@RestController
@RequestMapping("/api")
class TransactionController(@Autowired val transactionService: TransactionService) {
    @GetMapping("/category-wise-earning")
    fun getCategoryWiseEarning(): Document? {
        return transactionService.getCategoryWiseEarnings()
    }
    @GetMapping("/partner-wise-earning")
    fun getPartnerWiseEarning(): Document? {
        return transactionService.getPartnerWiseEarning()
    }
    @GetMapping("/date-wise-earning")
    fun getDateWiseEarning(): Document? {
        return transactionService.getDateWiseEarning()
    }
    @PostMapping("/add-transaction")
    fun addTransaction(@RequestBody transaction: Transaction): Transaction {
        return transactionService.addTransaction(transaction)
    }
    @GetMapping("/transactions/all")
    fun getAllTransactions():List<Transaction>{
        return transactionService.getAllTransactions()
    }

}