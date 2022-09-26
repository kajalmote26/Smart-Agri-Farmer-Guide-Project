import http from "../http-common";

class DailyDataService {
  getAll() {
    return http.get("/dailyprice");
  }

  get(id) {
    return http.get(`/dailyprice/${id}`);
  }

  create(data) {
    return http.post("/dailyprice", data);
  }

  update(id, data) {
    return http.put(`/dailyprice/${id}`, data);
  }

  delete(id) {
    return http.delete(`/dailyprice/${id}`);
  }

//   deleteAll() {
//     return http.delete(`/admin_tbl`);
//   }

//   findByEmail(email) {
//     return http.get(`/admin_tbl?email=${email}`);
//   }

//serach method for daily market rate by date
findByDate(cdate)
{
  return http.get(`/dailyprice/${cdate}`);
}

}

export default new DailyDataService();