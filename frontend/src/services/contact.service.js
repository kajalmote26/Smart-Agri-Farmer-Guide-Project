import http from "../http-common";

class ContactDataService {
  getAll() {
    return http.get("/contactslist");
  }

//   get(id) {
//     return http.get(`/dailyprice/${id}`);
//   }

  create(data) {
    return http.post("/contacts", data);
  }

//   update(id, data) {
//     return http.put(`/dailyprice/${id}`, data);
//   }

//   delete(id) {
//     return http.delete(`/dailyprice/${id}`);
//   }

//   deleteAll() {
//     return http.delete(`/admin_tbl`);
//   }

//   findByEmail(email) {
//     return http.get(`/admin_tbl?email=${email}`);
//   }

}

export default new ContactDataService();