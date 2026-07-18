function MetricCard({ title, value, change }) {
    return (
        <div className="card">
            <h4>{title}</h4>
            <h2>{value}</h2>
            {change && <p>{change}</p>}
        </div>
    );
}

export default MetricCard;