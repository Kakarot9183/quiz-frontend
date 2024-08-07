import { useState } from "react";
import QuizDetails from "../quiz-details/QuizDetails";
import Sidebar from "../sidebar/SIdebar";
import NavBar from "../../header/NavBar";

function CreateQuiz() {
    const [details, setDetails] = useState('quiz');

    const [quizName, setQuizName] = useState('');
    const [description, setDescription] = useState('');

    return (
        <>
            <div className="d-flex flex-column" style={{height: '100vh'}}>
                <NavBar />
                <div className="quiz-container my-auto">
                    <div className="create-quiz-form shadow-lg">
                        <Sidebar details={details} setDetails={setDetails} create={true}/>
                        <QuizDetails 
                            quizName={quizName}  
                            setQuizName={setQuizName}
                            description={description}
                            setDescription={setDescription}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateQuiz;