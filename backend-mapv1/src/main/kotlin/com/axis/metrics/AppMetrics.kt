//package com.axis.metrics
//
//import io.micrometer.core.instrument.Counter
//import io.micrometer.core.instrument.MeterRegistry
//import org.springframework.boot.info.BuildProperties
//import org.springframework.context.annotation.Bean
//import org.springframework.context.annotation.Configuration
//import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean
//
//import org.springframework.boot.autoconfigure.condition.ConditionalOnResource
//import org.springframework.stereotype.Service
//import java.lang.Exception
//import java.util.*
//
//
///**
// * Application metrics
// *
// */
//@Service
//@Configuration
//class AppMetrics {
//    @Bean
//    fun appVersion(reg: MeterRegistry?, build: BuildProperties): Counter {
//        val counter = Counter.builder("insurance.version")
//            .description("Application version")
//            .tags("application", build.name, "version", build.version)
//            .register(reg!!)
//        counter.increment()
//        return counter
//    }
//
//    @ConditionalOnMissingBean
//    @Bean
//    fun buildProperties(): BuildProperties {
//        val properties = Properties()
//        properties["group"] = "com.axis"
//        properties["artifact"] = "demo"
//        properties["version"] = "not-jarred"
//        properties["name"] = "Insurance-Products"
//        return BuildProperties(properties)
//    }
//
//
//}