/* eslint-disable react/prop-types */

import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const GameScreen = ({question, idQuestion, setIdQuestion, setInGame}) => {

  const [btnSelected, setBtnSelected] = useState(null)
  const [btnDisabled, setBtnDisabled] = useState(false)
  const [color, setColor] = useState('')

  const navigate = useNavigate()

  const handleClick = (option, index) =>{

    if(btnDisabled) return

    setBtnSelected(index)
    setBtnDisabled(true)

    setColor(question.correct === option ? 'bg-green-500' : 'bg-red-500')

    setTimeout(() => {
      if(question.correct === option){
        setIdQuestion(prevState => prevState + 1)
        setBtnSelected(null)
        setBtnDisabled(false)
      }else{
        setInGame(prevState => !prevState)
        navigate('/gameover')
      }
    },1000)
  }

  return (
      <div className="h-full max-w-3xl w-full flex flex-col justify-center gap-5 mx-2">
        {question ?
          <>
            <span className="self-end absolute top-3 text-xl font-dotGhotic16 text-slate-100">score: {idQuestion}</span>
            <p className="p-4 font-sans text-slate-100 text-2xl font-semibold sm:text-center border-2 border-slate-900 rounded-xl shadow-main bg-gradient-to-b from-pink-600 to-pink-900">{question.question}</p>
            {question.options.map(((option,index) =>(
              <button key={option}
              onClick={()=>handleClick(option, index)}
              className={`${btnSelected === index ? `${color} animate-choice` : 'bg-gradient-to-t from-yellow-300 to-yellow-200'}
              p-4 font-bungee text-lg border-2 border-slate-900 rounded-xl outline-none focus-visible:bg-yellow-400 sm:w-1/2 sm:self-center shadow-main`}
              >{option}</button>
            )))}
          </>
        : <Navigate to='/'/>}
      </div>
  )
}

export default GameScreen
