import http from "../http-common";

class ShopDataService {
  getAll() {
    return http.get("/shops");
  }

  get(id) {
    return http.get(`/shops/${id}`);
  }

  create(userId,data) {
    return http.post(`/users/${userId}/shops`, data);
  }

//   update(id, data) {
//     return http.put(`/admin_tbl/${id}`, data);
//   }

  delete(id) {
    return http.delete(`/shops/${id}`);
  }

  findByProductName(productName)
  {
    return http.get(`/shoplist/${productName}`);
  }

//   deleteAll() {
//     return http.delete(`/admin_tbl`);
//   }

//   findByEmail(email) {
//     return http.get(`/admin_tbl?email=${email}`);
//   }
}

export default new ShopDataService();