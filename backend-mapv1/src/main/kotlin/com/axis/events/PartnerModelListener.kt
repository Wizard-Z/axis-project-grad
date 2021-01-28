package com.axis.events

import com.axis.model.Partner
import com.axis.service.SequenceGeneratorService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener
import org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent
import org.springframework.stereotype.Component


@Component
class PartnerModelListener : AbstractMongoEventListener<Partner>() {
    private var sequenceGenerator: SequenceGeneratorService? = null
    @Autowired
    fun partnerModelListener(sequenceGenerator: SequenceGeneratorService?) {
        this.sequenceGenerator = sequenceGenerator
    }

    override fun onBeforeConvert(event: BeforeConvertEvent<Partner>) {
        if (event.source.id < 1) {
            event.source.id=(sequenceGenerator!!.generateSequence(Partner.SEQUENCE_NAME) + 100)
        }
    }
}