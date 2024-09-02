import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useGlobalContext } from "../context/context";

// Lazy load the Spinner component
const Spinner = lazy(() => import("../Components/UI/Spinner"));
const NotFound = lazy(() => import("../Components/UI/NotFound"));
const Layout = lazy(() => import("../Components/Layout/Layout"));
const Login = lazy(() => import("../pages/Login"));
const Signup = lazy(() => import("../pages/Signup"));
const Home = lazy(() => import("../pages/Home"));
const ProfileForm = lazy(() => import("../Components/Forms/ProfileForm"));
const Dashboard = lazy(() => import("../Components/Profile/Dashboard"));
const PrivateRoute = lazy(() => import("./PrivateRoute"));

const Routing = () => {
    const {isLoggedIn} = useGlobalContext();

    return (
        <Suspense fallback={<Spinner />}>
            <Routes>
            <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route element={<PrivateRoute isAuthenticated={isLoggedIn} />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Route>
                </Route>
                <Route path="/user/onboarding" element={<ProfileForm />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
};

export default Routing;