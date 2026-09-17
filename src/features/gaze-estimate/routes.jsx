import GazeEstimatePage from "./pages/GazeEstimatePage";

const gazeEstimateRoutes = [
    {
        path: "/gaze-estimate",
        element: <GazeEstimatePage />,
        handle: {
            title: "Gaze Estimate",
            nav: { label: "Gaze Estimate" }
        }
    }
];

export default gazeEstimateRoutes;
