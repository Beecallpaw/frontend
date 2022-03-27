import http from "./http-common";

class DBService {
    getServices() {
        return http.get("/services");
    }
    
    getServiceDetails(slug) {
        return http.get(`/services/${slug}`)
    }

    checkout(data) {
        return http.post("/checkout", data)
    }
}

export default new DBService();
