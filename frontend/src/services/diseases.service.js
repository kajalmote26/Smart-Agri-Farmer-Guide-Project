import http from "../http-common";

class DiseasesDataService {
  getAll() {
    return http.get("/diseaselist");
  }

  get(id) {
    return http.get(`/diseases/${id}`);
  }

  create(data) {
    return http.post("/diseases", data);
  }

  update(id, data) {
    return http.put(`/diseases/${id}`, data);
  }

  delete(id) {
    return http.delete(`/diseases/${id}`);
  }

//   deleteAll() {
//     return http.delete(`/admin_tbl`);
//   }

  findByCropName(cropName) {
    return http.get(`/diseaseslist/${cropName}`);
  }
}

export default new DiseasesDataService();