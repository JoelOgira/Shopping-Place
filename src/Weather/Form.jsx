
const Form = () => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input
                type="text"
                className="focus:outline-transparent w-full p-2 rounded"
            />
        </form>
    )
}

export default Form;