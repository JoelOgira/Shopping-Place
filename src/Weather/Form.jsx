import { useState } from "react";

const Form = () => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setCity('');
    }

    return (
        <div className="w-2/3 md:w-1/3">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="focus:outline-transparent w-full p-2 rounded text-black"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </form>
        </div>
    )
}

export default Form;