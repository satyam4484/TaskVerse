import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// Lazy load the Spinner component
const Spinner = lazy(() => import("../Components/UI/Spinner"));
const NotFound = lazy(() => import("../Components/UI/NotFound"));
const Layout = lazy(() => import("../Components/Layout/Layout"));
const Login = lazy(() => import("../pages/Login"));
const Signup = lazy(() => import("../pages/Signup"));
const Home = lazy(() => import("../pages/Home"))

const Routing = () => {
    return (
        <Suspense fallback={<Spinner />}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
};

export default Routing;