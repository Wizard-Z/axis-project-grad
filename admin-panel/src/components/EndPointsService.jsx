import axios from "axios";

export class EndPointsService {
  getEndPoints() {
    return axios.get("http://localhost:9096/test/endpoints/status");
  }
  getCategoryWiseEarning() {
    return axios.get("http://localhost:9096/test/category-wise-earning");
  }
  getPartnerWiseEarning() {
    return axios.get("http://localhost:9096/test/partner-wise-earning");
  }
  getDateWiseEarning() {
    return axios.get("http://localhost:9096/test/date-wise-earning");
  }
}

export default new EndPointsService();
