import CalibrationOverview from "./pages/CalibrationOverview"
import CalibrationProcess from "./pages/CalibrationProcess"
import CalibrationResult from "./pages/CalibrationResult"

const calibrationRoutes = [
    {
        path: "/calibration/overview",
        element: <CalibrationOverview />,
        handle: {
            title: "Calibration/ Overview",
            nav: { label: "Calibration" }
        }
    },
    {
        path: "/calibration/process",
        element: <CalibrationProcess />,
        handle: {
            title: "Calibration/ Process",
        }
    },
    {
        path: "/calibration/result",
        element: <CalibrationResult />,
        handle: {
            title: "Calibration/ Result",
        }
    }
];

export default calibrationRoutes;