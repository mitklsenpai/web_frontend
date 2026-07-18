import MetricCard from "../components/MetricCard";
import RecentActivity from "../components/RecentActivity";

import useDashboard from "../hooks/useDashboard";

function DashboardPage() {

    const {

        dashboard,

        loading

    } = useDashboard();

    if (loading) {

        return <p>Loading...</p>;

    }

    return (

        <>

            <MetricCard

                title="Users"

                value={dashboard.totalUsers}

            />

            <MetricCard

                title="Sessions"

                value={dashboard.totalSessions}

            />

            <RecentActivity

                activities={dashboard.activities}

            />

        </>

    );

}

export default DashboardPage;