//package com.axis.metrics
//
//import com.axis.model.Product
//import com.axis.repository.ProductRepository
//import io.micrometer.core.instrument.Gauge
//import org.springframework.boot.context.event.ApplicationReadyEvent
//
//import io.micrometer.core.instrument.MeterRegistry
//
//import lombok.RequiredArgsConstructor
//import org.springframework.beans.factory.annotation.Autowired
//import org.springframework.context.annotation.Configuration
//import org.springframework.context.event.EventListener
//
//
//@Configuration
//@RequiredArgsConstructor
//class ProductMetrics(@Autowired val reg: MeterRegistry, @Autowired val repo: ProductRepository) {
//    @EventListener
//    fun registerMetrics(e: ApplicationReadyEvent?) {
//        registerPetsMetrics()
//    }
//
//    private fun registerPetsMetrics() {
//        val products: List<Product> = repo.getAllAvailable() as List<Product>
//        for (product in products) {
//            val productName=product.productName
//            Gauge.builder("insurance.products") { 1 }.baseUnit("unit")
//                .description("Number of products")
//                .tag("type", "someType")
//                .register(reg)
//        }
//    }
//
//    companion object {
//        private const val ANIMALS_UNIT = "partner"
//    }
//}