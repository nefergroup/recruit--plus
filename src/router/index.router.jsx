import { createBrowserRouter } from "react-router";
import { RootLayout } from "../layout/root.layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Specilizations from "../pages/Specialization";
import RecruitmentProcess from "../pages/RecruitementProcess";
import Careers from "../pages/Careers";
import Services from "../pages/Services";
import Contact from "../pages/Contact";


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
                path: "recruit",
                element: <RecruitmentProcess />,
            },
            {
                path: "career",
                element: <Careers />,
            },
            {
                path: "services",
                element: <Services />,
            },
            {
                path: "contact-us",
                element: <Contact />,
            },
        ],
    },
]);