import http from "../http-common";

class MerchantDataService {
  getAll() {
    return http.get("/merchants");
  }

  get(id) {
    return http.get(`/merchants/${id}`);
  }

  create(data) {
    return http.post("/merchants", data);
  }

//   update(id, data) {
//     return http.put(`/admin_tbl/${id}`, data);
//   }

  delete(id) {
    return http.delete(`/merchants/${id}`);
  }

//   deleteAll() {
//     return http.delete(`/admin_tbl`);
//   }

  findByCity(city) {
    return http.get(`/merchantlist/${city}`);
  }
  update(id, data) {
    return http.put(`/merchants/${id}`, data);
  }

}

export default new MerchantDataService();