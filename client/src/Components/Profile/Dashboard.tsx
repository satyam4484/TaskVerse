import { useEffect, useState } from "react";
import DashboardForm from "./DashboardForm"

const Dashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const [dashBoards, setDashBoards] = useState([]);

    useEffect(() => {
        
    },[]);
    
    return (

        <>
            <div className="py-5 mt-10 text-center">
                <h1 className='text-4xl underline mb-10 font-bold text-purple-600 dark:text-purple-300'>WorkSpaces</h1>

                <div className="grid md:grid-cols-3 sm:grid-cols-2 md:gap-3 min-h-screen sm:gap-1 text-center ">

                    <div className="w-auto sm:py-7 sm:px-3 sm:m-3">
                        <div className="card rounded-xl border border-white border-dashed card-compact bg-base-200 shadow-xl">
                            <a className="cursor-pointer card-body">
                                <h2 className="card-title items-center" onClick={openModal}>Add Workspaces</h2>
                            </a>
                        </div>

                    </div>

                    <div className="w-auto sm:py-7 sm:px-3 m-3 text-center">
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