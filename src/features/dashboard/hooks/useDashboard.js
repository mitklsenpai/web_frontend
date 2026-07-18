import { useEffect, useState } from "react";

import { getDashboard } from "../services/dashboardService";

export default function useDashboard() {

    const [dashboard, setDashboard] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadDashboard();

    }, []);

    async function loadDashboard() {

        try {

            const res = await getDashboard();

            setDashboard(res.data);

        } finally {

            setLoading(false);

        }

    }

    return {

        dashboard,

        loading

    };

}