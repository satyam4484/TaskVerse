import React from 'react';
import { useState } from 'react';

interface DashboardFormProps {
    isOpen: boolean;
    closeModal: () => void;
}


const initalDashBoardState ={
    name:'',
    description:''
}

const DashboardForm: React.FC<DashboardFormProps> = ({ isOpen, closeModal }) => {
    
    const [dashboard, setDashBoard] = useState(initalDashBoardState);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setDashBoard({...dashboard,[name]: value});
    }

    const formSubmitHandler = (e: React.FocusEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(dashboard.name.trim().length ===0) {
            alert("Dashbaord name cannot be left blank");
            return;
        }
        if(dashboard.description.trim().length === 0){
            alert("Dashboard description cannot be left blank");
            return;
        }
    }

    return (
        <dialog id="my_modal_5" className={`modal modal-bottom sm:modal-middle ${isOpen ? 'modal-open' : ''}`}>
            <div className="modal-box w-full">
                <h3 className="font-bold text-center mb-5 text-xl underline ">WorkSpace</h3>

                <div className="justify-center my-2 mx-3 p-3">

                    <div className='px-3 mb-4'>
                        <label htmlFor="name" className="label text-gray-700 text-xl">
                            Name
                        </label>
                        <input type="text" placeholder="Workspace Name" name="name" value={dashboard.name} onChange={onChangeHandler} className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className='px-3'>
                        <label htmlFor="desc" className="label text-gray-700 text-xl">
                            Description
                        </label>
                        <textarea className="textarea textarea-bordered w-full max-w-xs textarea-ghost" value={dashboard.description} name="description" onChange={onChangeHandler}
                        placeholder="short desc min 15 words"/>
                    </div>

                    <button className='btn btn-primary my-5'>Add workspace</button>

                </div>
                <div className="modal-action">
                    <button className="btn btn-warning" onClick={closeModal}>Close</button>
                </div>
            </div>
        </dialog>
    );
};

export default DashboardForm;