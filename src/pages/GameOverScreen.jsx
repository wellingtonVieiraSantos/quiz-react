/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"

const GameOverScreen = ({setIdQuestion}) => {

  const navigate = useNavigate()

  const handleTouch = () =>{
    //obs: gambiarra para nao repetir a primeira pergunta ao perder, ja q a pergunta so muda ao trocar de idQuestion.
    setIdQuestion(1)
    setTimeout(()=>{
      navigate('/')
    },500)
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-20" onClick={handleTouch}>
      <h1 className="font-RockSalt text-4xl text-slate-100 font-bold">Game Over!</h1>
      <span className="font-dotGhotic16 text-base text-slate-100 animate-pulse">Toque na tela para recomeçar...</span>
    </div>
  )
}

export default GameOverScreen
