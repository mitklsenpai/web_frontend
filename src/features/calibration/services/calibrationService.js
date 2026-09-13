import api from "@/services/api";

const mockCurrentCalibration = {
    "model": "CAL-001",
    "accuracy": 92.5,
    "device": "DEV-001",
    "createAt": "22/8/2026",
    "status": "Success"
}

const mockCalibrationResult = {
    "pointError": 12,
    "accuracy": 95.3,
    "model": "CAL-002",
    "createAt": "01/09/2026",
    "device": "DEV-001",
    "status": "Success"
}

export const getCalibration = () => {

    // return api.get("/dashboard");
    // when the backend is not ready, we can use a mock data
    return {
        data: {
            currentCalibration: mockCurrentCalibration,
            calibrationResult: mockCalibrationResult
        }
    };

};