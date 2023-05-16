import { useState } from "react";

const Ninja = () => {  
    const correctAnswer = ['B', 'B', 'B', 'B'];
    const [quiz, setQuiz] = useState('A');
    let count = 0;

    const handleSubmit = e => {
        e.preventDefault();
        correctAnswer.map(answer => {
            if (quiz === answer) {
                count += 25;
            }
        })   
    }

    return (
        <div>
            <div className="bg-white flex items-center justify-center py-5">
                <h1 className="text-[#0d6efd] text-5xl font-thin">
                    Ninja Quiz
                </h1>
            </div>
            <div className={`bg-slate-300 flex items-center justify-center py-5`}>
                <h1 className="text-black text-3xl font-thin">
                    You are <span className="text-[#0d6efd]">{count}%</span> Ninja
                </h1>
            </div>
            <div className="bg-[#0d6efd] py-4">
                <div className="container mx-auto px-4">
                    <h2 className="font-semibold text-2xl mb-4">
                        On with the questions...
                    </h2>

                    <form onSubmit={handleSubmit}>
                        <div className="[&>div]:text-[#86b6fe] my-3">
                            <p className="py-3 font-thin text-2xl">
                                1. How do you give Ninja directions?
                            </p>
                            <div className="pl-5 py-1">
                                <input 
                                    type="radio" 
                                    name="q1"
                                    value="A"
                                    checked={quiz === "A"}
                                    onChange={(e) => setQuiz(e.target.value)}
                                />
                                <label htmlFor=""> Show them a map </label>                                    
                            </div>

                            <div className="pl-5 py-1">
                                <input 
                                    type="radio" 
                                    name="q1"
                                    value="B"
                                    checked={quiz === "B"}
                                    onChange={(e) => setQuiz(e.target.value)}
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
                                    checked={quiz === "A"}
                                    onChange={(e) => setQuiz(e.target.value)}
                                />
                                <label htmlFor=""> 1 apple </label>                                    
                            </div>

                            <div className="pl-5 py-1">
                                <input 
                                    type="radio"
                                    name="q2"
                                    value="B" 
                                    checked={quiz === "B"}
                                    onChange={(e) => setQuiz(e.target.value)}
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
                                    checked={quiz === "A"}
                                    onChange={(e) => setQuiz(e.target.value)}
                                />
                                <label htmlFor=""> Some funny mask </label>                                    
                            </div>

                            <div className="pl-5 py-1">
                                <input 
                                    type="radio"
                                    name="q3"
                                    value="B" 
                                    checked={quiz === "B"}
                                    onChange={(e) => setQuiz(e.target.value)}
                                />
                                <label htmlFor=""> It's suddenly so hot. Ooops! You are in hell. </label>                                    
                            </div>
                        </div>

                        <div className="[&>div]:text-[#86b6fe] my-3">
                            <p className="py-3 font-thin text-2xl">
                            4. What is a Ninja's favorite sword?
                            </p>
                            <div className="pl-5 py-1">
                                <input 
                                    type="radio" 
                                    name="q4"
                                    value="A" 
                                    checked={quiz === "A"}
                                    onChange={(e) => setQuiz(e.target.value)}
                                />
                                <label htmlFor="">  It is Kachina </label>                                    
                            </div>

                            <div className="pl-5 py-1">
                                <input 
                                    type="radio" 
                                    name="q4"
                                    value="B" 
                                    checked={quiz === "B"}
                                    onChange={(e) => setQuiz(e.target.value)}
                                />
                                <label htmlFor="">  It is Katana </label>                                    
                            </div>
                        </div>
                        

                        <button type="submit" className="px-4 py-2 border bg-white text-black rounded">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Ninja;