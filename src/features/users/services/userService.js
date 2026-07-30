import api from "@/services/api";

export const getUsers = () => {

    // return api.get("/users");
    // when the backend is not ready, we can use a mock data
    return {
        data: {
            totalUsers: 111
        }
    };

};