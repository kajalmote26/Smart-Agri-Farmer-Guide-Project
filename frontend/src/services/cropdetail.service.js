import http from "../http-common";

class CropDetailDataService {
  getAll() {
    return http.get(`/cropdetailslist`);
  }

  get(id) {
    return http.get(`/cropdetail/${id}`);
  }

  create(data) {
    return http.post("/cropdetail", data);
  }

  update(id, data) {
    return http.put(`/cropdetail/${id}`, data);
  }

  delete(id) {
    return http.delete(`/cropdetail/${id}`);
  }

//   deleteAll() {
//     return http.delete(`/admin_tbl`);
//   }

//   findByEmail(email) {
//     return http.get(`/admin_tbl?email=${email}`);
//   }
}

export default new CropDetailDataService();