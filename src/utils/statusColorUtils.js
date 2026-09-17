
export function getStatusColor(value, thresholds) {
    const threshold = Array.isArray(thresholds) ? thresholds[0] : thresholds

    if (value >= threshold.success) {
        return "success.main"
    }
    if (value >= threshold.warning) {
        return "warning.main"
    } 
    
    return "error.main"
}