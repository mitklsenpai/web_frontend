import api from "@/services/api";

export const getDashboard = () => {

    // return api.get("/dashboard");
    // when the backend is not ready, we can use a mock data
    return {
        data: {
            totalUsers: 120,
            totalSessions: 58
        }
    };

};