import { useCallback } from "react";
import { useFetch } from "@/hooks/useFetch";
import { getDashboard } from "../services/dashboardService";

export default function useDashboard() {
    const fetchDashboard = useCallback(async () => {
        const res = await getDashboard();
        return res.data;
    }, []);

    const { data: dashboard, loading } = useFetch(fetchDashboard);

    return {
        dashboard,
        loading,
        activities: dashboard?.recentActivities ?? []
    };
}
