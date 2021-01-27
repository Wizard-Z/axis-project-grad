package com.axis

import org.slf4j.LoggerFactory
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

import org.springframework.boot.web.server.WebServerFactoryCustomizer
import org.springframework.boot.web.reactive.server.ConfigurableReactiveWebServerFactory
import org.springframework.context.annotation.Bean


@SpringBootApplication
class BackendMapv1Application

fun main(args: Array<String>) {
    val logger = LoggerFactory.getLogger(BackendMapv1Application::class.java)

    runApplication<BackendMapv1Application>(*args)
    logger.info("\n\n[----<<back-end v1>>----]\n\n")
}
