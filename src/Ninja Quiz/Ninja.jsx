import { useState } from "react";


const Ninja = () => {  
    return (
        <div>
            <div className="bg-white flex items-center justify-center py-5">
                <h1 className="text-blue-600 text-5xl font-thin">
                    Ninja Quiz
                </h1>
            </div>
            <div className="bg-blue-500 py-4">
                <div className="container mx-auto px-4">
                    <h2 className="font-semibold text-2xl">
                        On with the questions...
                    </h2>
                    <form>

                        <button type="submit" className="p-4 border ">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Ninja;