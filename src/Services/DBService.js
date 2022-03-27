import http from "./http-common";

class DBService {
    getServices() {
        return http.get("/services");
    }
}

export default new DBService();
