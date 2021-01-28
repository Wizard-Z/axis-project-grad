package com.axis.model

import org.springframework.stereotype.Component


@Component
class PartnerList(var partner: MutableList<Partner> = mutableListOf()) {
}