package com.axis.events



import com.axis.model.Transaction
import com.axis.service.SequenceGeneratorService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener
import org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent
import org.springframework.stereotype.Component

@Component
class TransactionModelListener: AbstractMongoEventListener<Transaction>() {
    private var sequenceGenerator: SequenceGeneratorService? = null
    @Autowired
    fun partnerModelListener(sequenceGenerator: SequenceGeneratorService?) {
        this.sequenceGenerator = sequenceGenerator
    }

    override fun onBeforeConvert(event: BeforeConvertEvent<Transaction>) {
        if (event.source.id < 1) {
            event.source.id=(sequenceGenerator!!.generateSequence(Transaction.SEQUENCE_NAME) + 100)
        }
    }
}