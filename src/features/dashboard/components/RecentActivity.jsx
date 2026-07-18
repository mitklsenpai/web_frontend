function RecentActivity({ activities }) {
    return (
        <ul>
            <li>
                Tổng số người dùng: {activities?.data?.totalUsers ?? 0}
            </li>
            <li>
                Tổng số phiên: {activities?.data?.totalSessions ?? 0}
            </li>
        </ul>
    );
}

export default RecentActivity;