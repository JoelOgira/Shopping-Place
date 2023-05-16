import Form from "./Form";
import useAxiosFetch from "../Hooks/useAxiosFetch";
const Weather = () => {
    const {data, isLoading, error} = useAxiosFetch();

    return (
        <div className="container mx-auto px-2 md:px-0">
            <div className="flex items-center justify-center flex-col py-5 space-y-6">
                <h1 className="text-5xl font-semibold">Weather Application</h1>
                <h3>Enter a Location for the Weather Information</h3>
                <Form />
            </div>
        </div>
    )
}

export default Weather;