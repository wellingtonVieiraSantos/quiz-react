/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"

const GameVictory = ({setIdQuestion}) => {

  const navigate = useNavigate()

  const handleTouch = () =>{
    setIdQuestion(0)
    setTimeout(() => {
      navigate('/')
    }, 500);
  }

  return (
    <div className='w-full h-full flex justify-center items-center flex-col gap-20 text-white'
    onClick={handleTouch}>
      <h1 className="font-RockSalt text-4xl text-slate-100 font-bold">Parabéns!</h1>
      <span className="text-xl font-RockSalt underline">Você acertou todas.</span>
      <span className="font-dotGhotic16 text-base text-slate-100 animate-pulse">Toque na tela para recomeçar...</span>
    </div>
  )
}

export default GameVictory
