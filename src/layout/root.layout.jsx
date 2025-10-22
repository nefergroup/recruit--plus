import { Outlet } from "react-router";
// import { Footer } from "../components/common/footer";
import { ScrollToTop } from "../utils/scrollToTop";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

export const RootLayout = () => {
    return (
        <>
            <ScrollToTop/>
            <Navbar />
            <main className="max-w-[1920px] min-h-[70vh] mx-auto pt-20"> {/* <- add pt-20 */}
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

