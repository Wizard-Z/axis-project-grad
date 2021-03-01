package com.axis.service

import com.axis.model.Transaction
import com.axis.repository.TransactionRepository
import org.bson.Document
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.web.bind.annotation.RequestBody

@Service
class TransactionService(@Autowired val transactionRepository: TransactionRepository) {
    fun getCategoryWiseEarnings():Document?{
        return transactionRepository.getCategoryWiseEarnings()?.rawResults
    }
    fun getPartnerWiseEarning(): Document? {
        return transactionRepository.getPartnerWiseEarnings()?.rawResults
    }

    fun getDateWiseEarning(): Document? {
        return transactionRepository.getDateWiseEarnings()?.rawResults
    }

    fun addTransaction(@RequestBody transaction: Transaction): Transaction {
        return transactionRepository.save(transaction)
    }

    fun getAllTransactions():List<Transaction>{
        return transactionRepository.findAll()
    }

}