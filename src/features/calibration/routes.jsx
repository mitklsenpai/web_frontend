import CalibrationOverview from "./pages/CalibrationOverview"
import CalibrationProcess from "./pages/CalibrationProcess"
import CalibrationResult from "./pages/CalibrationResult"

const calibrationRoutes = [
    {
        path: "/calibration/overview",
        element: <CalibrationOverview />,
        handle: {
            title: "Calibration",
            nav: { label: "Calibration" }
        }
    },
];

export default calibrationRoutes;