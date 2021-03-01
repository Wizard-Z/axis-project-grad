import axios from 'axios'
const BASE_URL = process.env.REACT_APP_BASE_URL
export class PartnerSerivce {
    getPartnerByType(category){
        return axios.get(`${BASE_URL}/api/get-partners/${category}`)
        // return axios.get(`/api/get-partners/${category}`)
    }
    getProducts(){
        return axios.get(`${BASE_URL}/api/available/products`)
        // return axios.get("http://insurance-service:9096/test/available/products")
    }
    getQuotes(id,formData){
        // return axios.post(`${BASE_URL}/get-quote/${id}`,{formData:formData})
        return axios.post(`${BASE_URL}/api/get-quote/${id}`,{formData:formData})

    }
    getMultipleQuotes(formData,productName,id){
        console.log(productName +"is hit")
        return axios.post(`${BASE_URL}/get-quotes/${productName}/${id}`,{formData:formData})
        // return axios.post(`/api/get-quotes/${productName}/${id}`,{formData:formData})

    }
    getPartners(){
        return axios.get(`${BASE_URL}/api/describe-partners`)
        // return axios.get('/api/describe-partners')

    }
    getAdditionalFields(id){
        // return axios.get(`${BASE_URL}/get-additional-fields/${id}`)
        return axios.get(`/api/get-additional-fields/${id}`)


    }

} 
export default new PartnerSerivce()
