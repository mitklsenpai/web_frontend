import api from "@/services/api";

const mockUser = {
    id: 1,
    fullName: "Mit Kl",
    email: "mit@example.com",
    phone: "0123456789",
    gender: "Male",
    country: "Viet Nam",
    birth: "25/06/2006",
};

const mockConfiguration = {
    device_model: "ESP 3200",
    device_code: "DEV-001",
    calibration_model: "CAL-001",
    caibration_type: "9 point",
    calibration_accuracy: "92.5%",
    calibration_status: "Ready"
};

export const getUser = async () => {
    return {
        data: {
            user: mockUser,
            config: mockConfiguration
        }
    };
};

export const updateUser = async (userId, data) => {
    console.log("Mock update:", userId, data);

    return {
        data: {
            ...data,
            id: userId,
        },
    };
};