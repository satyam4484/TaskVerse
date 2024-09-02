import React from "react";
import { NavLink } from "react-router-dom";
import { AppContextProps,useGlobalContext } from "../../context/context";
import Theme from "../UI/Theme";


const Navbar: React.FC<{}> = () => {
    const {user, setTheme }: Partial<AppContextProps> = useGlobalContext();
    console.log("use---",user)

    return (
        <div className="navbar bg-base-100 shadow-lg">
            <div className="flex-1">
                <NavLink to="/" className="btn btn-ghost text-2xl">TaskVerse</NavLink>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={user.avatar} />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <NavLink to="/profile" className="justify-between">
                                Profile <span className="badge">New</span>
                            </NavLink>
                        </li>
                        <li><NavLink to="/settings">Settings</NavLink></li>
                        <li><NavLink to="/Logout">Logout</NavLink></li>
                        <li onClick={setTheme}>
                            <Theme/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;