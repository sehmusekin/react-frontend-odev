import axios from "axios";

export default class BrandService {
  getBrands() {
    return axios.get("http://localhost:8081/api/brands/getAll");
  }
}
