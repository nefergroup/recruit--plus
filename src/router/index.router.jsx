import { createBrowserRouter } from "react-router";
import { RootLayout } from "../layout/root.layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Specilizations from "../pages/Specialization";
import RecruitmentProcess from "../pages/RecruitementProcess";
import Careers from "../pages/careers";


export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "specilization",
                element: <Specilizations />,
            },
            {
                path: "recruite",
                element: <RecruitmentProcess />,
            },
            {
                path: "career",
                element: <Careers />,
            },
        ],
    },
]);