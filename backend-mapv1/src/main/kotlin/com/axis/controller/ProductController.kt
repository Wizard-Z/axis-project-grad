package com.axis.controller

import com.axis.model.Product
import com.axis.service.ProductService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@CrossOrigin
@RestController
@RequestMapping("/api")
class ProductController(
    @Autowired val productService: ProductService,
) {

    @PostMapping("/addProduct")
    fun addProduct(@RequestBody product: Product): Product {
        return productService.addProduct(product)
    }

    @GetMapping("/available/products")
    fun getAllAvailableProducts(): List<Product?> {
        return productService.getAllAvailable()
    }

    @GetMapping("/products")
    fun getAllProducts(): List<Product?> {
        return productService.getAll()
    }


}