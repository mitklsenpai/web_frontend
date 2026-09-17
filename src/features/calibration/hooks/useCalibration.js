import { useCallback } from "react";
import { useFetch } from "@/hooks/useFetch";
import { getCalibration } from "../services/calibrationService";

export default function useCalibration() {
    const fetchCalibration = useCallback(async () => {
        const res = await getCalibration();
        return res.data;
    }, []);

    const { data: calibration, loading } = useFetch(fetchCalibration);

    return {
        calibration,
        loading
    };
}
