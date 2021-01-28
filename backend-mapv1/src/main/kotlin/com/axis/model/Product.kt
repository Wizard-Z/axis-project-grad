package com.axis.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document(collection="products")
class Product(@Id var id:Int, var imgUrl:String,
              var productName:String, var productDescription:String, var available:Boolean ) {

}