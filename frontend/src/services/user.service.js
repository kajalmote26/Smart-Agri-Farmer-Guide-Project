import http from "../http-common";

class UserDataService {
  getAll() {
    return http.get("/users");
  }

//   get(id) {
//     return http.get(`/admin_tbl/${id}`);
//   }

  create(data) {
    return http.post("/signup", data);
  }

//   update(id, data) {
//     return http.put(`/admin_tbl/${id}`, data);
//   }

  delete(id) {
    return http.delete(`/users/${id}`);
  }

//   deleteAll() {
//     return http.delete(`/admin_tbl`);
//   }

//   findByEmail(email) {
//     return http.get(`/admin_tbl?email=${email}`);
//   }
}

export default new UserDataService();