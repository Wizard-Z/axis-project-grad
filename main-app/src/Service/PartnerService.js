import axios from 'axios'
import React, { Component } from 'react'
const BASE_URL = "http://localhost:9096/api"

export class PartnerSerivce {
    getPartnerByType(category){
        return axios.get(BASE_URL+"/get-partners/"+category)
    }
    getProducts(){
        return axios.get("http://localhost:9096/test/available/products")
    }
    getQuotes(id,formData){
        return axios.post(`${BASE_URL}/get-quote/${id}`,{formData:formData})
    }
    getMultipleQuotes(formData,productName,id){
        console.log(productName +"is hit")
        return axios.post(`${BASE_URL}/get-quotes/${productName}/${id}`,{formData:formData})
    }
    getPartners(){
        return axios.get(`${BASE_URL}/describe-partners`)
    }
    getAdditionalFields(id){
        return axios.get(`${BASE_URL}/get-additional-fields/${id}`)

    }

} 
export default new PartnerSerivce()
