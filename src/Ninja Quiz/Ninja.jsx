import { useState } from "react";

const Ninja = () => {
    const correctAnswer = [ 'B', 'B', 'B', 'B' ];
    const [ count, setCount ] = useState(0);
    const [ submitted, setSubmitted ] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        let newCount = 0;
        let output = 0;

        for (let i = 1; i <= correctAnswer.length; i++) {
            const questionName = `q${i}`;
            const selectedOption = formData.get(questionName);

            if (selectedOption === correctAnswer[ i - 1 ]) {
                console.log((selectedOption === correctAnswer[ i - 1 ]))
                newCount += 25;
            }
        }

        // Set interval to count up the
        const timer = setInterval(() => {
            if (output === newCount) {
                clearInterval(timer)
            } else {
                output++
            }
            setCount(output);
            scrollTo(0, 0);
        }, 25)

        setSubmitted(true);
    }

    const retakeTest = () => {
        setSubmitted(false)
        setCount(0);
    }

    return (
        <div>
            <div className="flex flex-col md:flex-row">
                <div className={`bg-white flex items-center justify-center py-5 ${submitted ? 'md:w-1/2' : 'w-full'}`}>
                    <h1 className="text-[#0d6efd] text-5xl font-thin">
                        Ninja Quiz
                    </h1>
                </div>
                {submitted && <div className={`bg-slate-300 flex items-center justify-center py-5 md:w-1/2`}>
                    <h1 className="text-black text-3xl font-thin">
                        You are <span className="text-[#0d6efd]">{count}%</span> Ninja
                    </h1>
                </div>}
            </div>

            <div className="bg-[#0d6efd] py-4">
                <div className="container mx-auto px-4">
                    <h2 className="font-semibold text-2xl mb-4">
                        On with the questions...
                    </h2>

                    <form onSubmit={handleSubmit} className="[&>div>div>div>input]:cursor-pointer">
                        <div className="grid md:grid-cols-2">
                            <div className="[&>div]:text-[#86b6fe] my-3">
                                <p className="py-3 font-thin text-2xl">
                                    1. How do you give Ninja directions?
                                </p>
                                <div className="pl-5 py-1">
                                    <input
                                        type="radio"
                                        name="q1"
                                        value="A"
                                    />
                                    <label htmlFor=""> Show them a map </label>
                                </div>

                                <div className="pl-5 py-1">
                                    <input
                                        type="radio"
                                        name="q1"
                                        value="B"
                                    />
                                    <label htmlFor=""> A Ninja knows the way </label>
                                </div>
                            </div>

                            <div className="[&>div]:text-[#86b6fe] my-3">
                                <p className="py-3 font-thin text-2xl">
                                    2. If a Ninja has 3 apples, then gives one to Yasuke & one to Saitama how many apples does the Ninja have left?
                                </p>
                                <div className="pl-5 py-1">
                                    <input
                                        type="radio"
                                        name="q2"
                                        value="A"

                                    />
                                    <label htmlFor=""> 1 apple </label>
                                </div>

                                <div className="pl-5 py-1">
                                    <input
                                        type="radio"
                                        name="q2"
                                        value="B"

                                    />
                                    <label htmlFor=""> 3 apples, and 2 sleeves </label>
                                </div>
                            </div>

                            <div className="[&>div]:text-[#86b6fe] my-3">
                                <p className="py-3 font-thin text-2xl">
                                    3. How do you know when you have met a Ninja?
                                </p>
                                <div className="pl-5 py-1">
                                    <input
                                        type="radio"
                                        name="q3"
                                        value="A"

                                    />
                                    <label htmlFor=""> Some funny mask </label>
                                </div>

                                <div className="pl-5 py-1">
                                    <input
                                        type="radio"
                                        name="q3"
                                        value="B"
                                    />
                                    <label htmlFor=""> It&apos;s suddenly so hot. Ooops! You are in hell. </label>
                                </div>
                            </div>

                            <div className="[&>div]:text-[#86b6fe] my-3">
                                <p className="py-3 font-thin text-2xl">
                                    4. What is a Ninja&apos;s favorite sword?
                                </p>
                                <div className="pl-5 py-1">
                                    <input
                                        type="radio"
                                        name="q4"
                                        value="A"
                                    />
                                    <label htmlFor="">  It is Kachina </label>
                                </div>

                                <div className="pl-5 py-1">
                                    <input
                                        type="radio"
                                        name="q4"
                                        value="B"
                                    />
                                    <label htmlFor="">  It is Katana </label>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="px-4 py-2 border bg-white text-black rounded">
                            Submit
                        </button>
                    </form>
                    <div className="flex items-end justify-end -mt-[2.7rem]">
                        <button onClick={retakeTest} className="px-4 py-2 border bg-white text-black rounded">
                            Retake Test
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ninja;
