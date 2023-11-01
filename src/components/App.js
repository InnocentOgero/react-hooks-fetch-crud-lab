import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const[questions,setQuestions]=useState([])
  useEffect(()=>{
    fetch('http://localhost:4000/questions')
    .then(response=>response.json())
    .then(data=>{
      setQuestions(data)

    })
  },[])
  function handleAnswerState(updatedQuestion){
    console.log(updatedQuestion)

  }
  function handleStateDeleted(deletedData){
    const upDatedQuestions=questions.filter(question=>question.id!==deletedData.id)
    setQuestions(upDatedQuestions)
  }
  function handleNewQuestion(newQuestion){
    const upDatedQuestions=[...questions,newQuestion]
    setQuestions(upDatedQuestions)
    
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm handleNewQuestion={handleNewQuestion}/> : <QuestionList questions={questions} 
      handleStateDeleted={handleStateDeleted} handleAnswerState={handleAnswerState}/>}
    </main>
  );
}

export default App;
