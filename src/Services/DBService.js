import http from "./http-common";

class DBService {
    getServices() {
        return http.get("/services");
    }
    
    getServiceDetails(slug) {
        return http.get(`/services/${slug}`)
    }

}

export default new DBService();
