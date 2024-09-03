
const Dashboard = () => {
    return (
        <div className="py-5 mt-10 text-center">
            <h1 className='text-4xl underline mb-10 font-bold text-purple-600 dark:text-purple-300'>WorkSpaces</h1>

            <div className="grid md:grid-cols-3 sm:grid-cols-2 md:gap-3 min-h-screen sm:gap-1 text-center ">

                <div className="w-auto sm:py-7 sm:px-3 m-3 text-center">
                    <div className="border border-dashed border-gray-900 bg-gray-300 rounded-xl relative">
                        
                        <input type="button" multiple className="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50" />
                        <div className="text-center p-10 absolute top-1.5 right-0 left-0 m-auto">
                            <h4 className="font-bold text-xl">
                                Add WorkSpaces
                            </h4>
                        </div>
                    </div>
                </div>

                <div className="w-auto sm:py-7 sm:px-3 m-3 text-center">
                    <div className="border border-dashed border-gray-900 bg-blue-300 rounded-xl relative">
                        
                        <input type="button" multiple className="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50" />
                        <div className="text-center p-10 absolute top-1.5 right-0 left-0 m-auto">
                            <h4 className="font-bold text-xl">
                                If a dog chews shoes whose shoes does he choose?
                            </h4>
                        </div>
                    </div>
                </div>


                <div className="w-auto sm:py-7 sm:px-3 m-3 text-center">
                    <div className="card rounded-xl card-compact bg-base-100 shadow-xl">
                        {/* <figure className='avatar rounded h-32'>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure> */}

                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    )
}

export default Dashboard