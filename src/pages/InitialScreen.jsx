/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const InitialScreen = ({setInGame, setIdQuestion}) => {

  const navigate = useNavigate()

const handleTouch = () =>{
  setInGame(prevState => !prevState)
  setIdQuestion(0)
  setTimeout(()=>{
    navigate('/game')
  },500)
}

  return (
    <div className='w-full h-full flex justify-center items-center flex-col gap-20 text-white border border-black'
      onClick={handleTouch}>
      <h1 className='font-RockSalt text-7xl font-bold '>Quiz</h1>
      <span className='font-dotGhotic16 animate-pulse'>Toque para começar.</span>
      <span className="text-xs font-dotGhotic16 font">Created by Ton</span>
    </div>
  )
}

export default InitialScreen
