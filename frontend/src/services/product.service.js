import http from "../http-common";

class ProductDataService {
  getAll() {
    return http.get("/products");
  }

  get(shopId) {
    return http.get(`/shops/${shopId}/products`);
  }
  get1(id) {
    return http.get(`/products/${id}`);
  }
  
  getByNameContact(shopName,contact) {
    return http.get(`/shops/${shopName}/${contact}/products`);
  }
  create(data,shopId) {
    return http.post(`/shops/${shopId}/products`, data);
  }

  update(id, data) {
    return http.put(`/products/${id}`, data);
  }

  delete(id) {
    return http.delete(`/products/${id}`);
  }

//   deleteAll() {
//     return http.delete(`/admin_tbl`);
//   }

//   findByEmail(email) {
//     return http.get(`/admin_tbl?email=${email}`);
//   }
}

export default new ProductDataService();