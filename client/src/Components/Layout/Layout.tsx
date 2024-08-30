import { ReactNode } from "react";
import Navbar from "./Navbar";



const Layout: React.FC<{ children: ReactNode }> = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Navbar />
            <div className="container h-screen">
                {children}
            </div>
        </>
    )
}

export default Layout;

