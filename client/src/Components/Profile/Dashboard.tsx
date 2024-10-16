import { useEffect, useState } from "react";
import DashboardForm from "./DashboardForm"
import { dashboardEndPoint } from "../../network/agent";

const Dashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [dashBoards, setDashBoards] = useState([]);

    const getDashboard = async () => {
        const data = await dashboardEndPoint.getAllDashboards();
        console.log("datat--", data);

        setDashBoards(data);

    }

    useEffect(() => {
        getDashboard();
    }, []);

    return (

        <>
            <div className="py-5 mt-10 text-center">
                <h1 className='text-6xl underline mb-10 font-bold text-purple-600 dark:text-purple-300'>
                    WorkSpaces
                    <button className="btn btn-primary ml-10" onClick={openModal}> Add Workspaces</button>
                </h1>

                <div className="grid md:grid-cols-3 sm:grid-cols-2 md:gap-3 h-auto p-5 sm:gap-1 text-center ">

                    <div className="md:w-[400] sm:w-[600] h-14 sm:py-7 sm:px-3 m-3 mb-20 text-center">
                        <div className="card rounded-xl card-compact bg-base-200 shadow-xl">
                            <a className="cursor-pointer card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </a>
                        </div>
                    </div>
                    <div className="md:w-[400] sm:w-[600] h-14 sm:py-7 sm:px-3 m-3 text-center">
                        <div className="card rounded-xl card-compact bg-base-200 shadow-xl">
                            <a className="cursor-pointer card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </a>
                        </div>
                    </div>
                    <div className="md:w-[400] sm:w-[600] h-14 sm:py-7 sm:px-3 m-3 text-center">
                        <div className="card rounded-xl card-compact bg-base-200 shadow-xl">
                            <a className="cursor-pointer card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </a>
                        </div>
                    </div>
                    <div className="md:w-[400] sm:w-[600] h-14 sm:py-7 sm:px-3 m-3 text-center">
                        <div className="card rounded-xl card-compact bg-base-200 shadow-xl">
                            <a className="cursor-pointer card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            <DashboardForm isOpen={isModalOpen} closeModal={closeModal} />

        </>
    )
}

export default Dashboard