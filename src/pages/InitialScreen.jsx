import { useNavigate } from "react-router-dom";

const InitialScreen = () => {

  const navigate = useNavigate()

const handleTouch = () =>{
  setTimeout(()=>{
    navigate('/game')
  },500)
}

  return (
    <div className='w-full h-full flex justify-center items-center flex-col gap-20 text-white border border-black'
      onClick={handleTouch}>
      <h1 className='font-RockSalt text-7xl font-bold '>Quiz</h1>
      <span className='font-dotGhotic16 animate-pulse'>Toque para começar.</span>
    </div>
  )
}

export default InitialScreen
