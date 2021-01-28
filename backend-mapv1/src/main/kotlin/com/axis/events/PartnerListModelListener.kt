package com.axis.events


import com.axis.model.PartnerDetail
import com.axis.service.SequenceGeneratorService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener
import org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent
import org.springframework.stereotype.Component


@Component
class PartnerListModelListener : AbstractMongoEventListener<PartnerDetail>() {
    private var sequenceGenerator: SequenceGeneratorService? = null
    @Autowired
    fun partnerModelListener(sequenceGenerator: SequenceGeneratorService?) {
        this.sequenceGenerator = sequenceGenerator
    }

    override fun onBeforeConvert(event: BeforeConvertEvent<PartnerDetail>) {
        if (event.source.id < 1) {
            event.source.id=(sequenceGenerator!!.generateSequence(PartnerDetail.SEQUENCE_NAME) + 100)
        }
    }
}