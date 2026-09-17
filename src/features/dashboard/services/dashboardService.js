import api from "@/services/api";
import { ActivityType } from "../constants/activityTypes";

const mockActivities = [
    {
        id: 1,
        date: "2026-09-06T08:42:00",
        type: ActivityType.CALIBRATION_COMPLETED,
        detail: "Calibration completed for DEV-001",
        status: "Completed"
    },
    {
        id: 2,
        date: "2026-09-06T08:15:00",
        type: ActivityType.SESSION_STARTED,
        detail: "Mit Kl started a gaze tracking session",
        status: "Running"
    },
    {
        id: 3,
        date: "2026-09-06T07:58:00",
        type: ActivityType.TRACKING_RECONNECTED,
        detail: "Tracking reconnected for ESP 3200",
        status: "Completed"
    },
    {
        id: 4,
        date: "2026-09-05T22:30:00",
        type: ActivityType.DEVICE_DISCONNECTED,
        detail: "Device ESP 3200 went offline",
        status: "Warning"
    },
    {
        id: 5,
        date: "2026-09-05T21:12:00",
        type: ActivityType.ANALYSIS_COMPLETED,
        detail: "Attention analysis finished for session #48",
        status: "Completed"
    },
    {
        id: 6,
        date: "2026-09-05T18:00:00",
        type: ActivityType.REPORT_GENERATED,
        detail: "Weekly attention report exported",
        status: "Completed"
    },
    {
        id: 7,
        date: "2026-09-05T16:45:00",
        type: ActivityType.PROFILE_UPDATED,
        detail: "Mit Kl updated profile information",
        status: "Completed"
    },
    {
        id: 8,
        date: "2026-09-05T14:20:00",
        type: ActivityType.MODEL_TRAINING_FAILED,
        detail: "Training failed for calibration model CAL-001",
        status: "Failed"
    }
];

export const getDashboard = () => {

    // return api.get("/dashboard");
    // when the backend is not ready, we can use a mock data
    return {
        data: {
            totalUsers: 120,
            totalSessions: 58,
            attentionRate: 82.4,
            calibrationAccuracy: 92.5,
            activeDevices: 3,
            recentActivities: mockActivities
        }
    };

};