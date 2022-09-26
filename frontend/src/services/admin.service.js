import http from "../http-common";

class AdminDataService {
  getAll() {
    return http.get(`/users`);
  }

  // getAll(){
  //   return httpClient.get('');
  // }

  get(id) {
    return http.get(`/admin_tbl/${id}`);
  }

  create(data) {
    return http.post("/admin_tbl", data);
  }

  update(id, data) {
    return http.put(`/admin_tbl/${id}`, data);
  }

  delete(id) {
    return http.delete(`/admin_tbl/${id}`);
  }

  deleteAll() {
    return http.delete(`/admin_tbl`);
  }

  findByEmail(email) {
    return http.get(`/admin_tbl?email=${email}`);
  }
}

export default new AdminDataService();