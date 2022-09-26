import http from "../http-common";

class DriverDataService {
  getAll() {
    return http.get("/vehicleslist");
  }

  //get vehicle details by using Vehicle id
  get(id) {
    return http.get(`/vehicles/${id}`);
  }

  //Save or add Vehicle Details by passing User Id
  create(userId,data) {
    return http.post(`/users/${userId}/vehicles`,data);
  }

  //update vehicle details by passing vehicle id and data
  update(id, data) {
    return http.put(`/vehicles/${id}`, data);
  }

  // delete(id) {
  //   return http.delete(`/driver_t/${id}`);
  // }

//   deleteAll() {
//     return http.delete(`/admin_tbl`);
//   }

//Get Driver List by passing Taluka
  findByTaluka(taluka) {
    return http.get(`/driverlist/${taluka}`);
  }
}

export default new DriverDataService();