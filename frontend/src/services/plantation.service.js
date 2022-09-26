import http from "../http-common";

class PlantationDataService
{

    getAll() {
        return http.get("/plantation");
      }
    
    create(data)
    {
        return http.post("/plantation",data);
    }

    findByMonth(month)
    {
        return http.get(`/plantation/${month}`);
    }

  
}

export default new PlantationDataService();