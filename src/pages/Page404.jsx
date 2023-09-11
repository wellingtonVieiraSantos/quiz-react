/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"

const Page404 = ({setIdQuestion}) => {

  const navigate = useNavigate()

  const handleTouch = () =>{
    setIdQuestion(0)
    setTimeout(()=>{
      navigate('/')
    },500)
  }

  return (
    <div className="w-full flex flex-col justify-center items-center gap-10 text-slate-100 font-dotGhotic16"
      onClick={handleTouch}>
      <h1 className="text-4xl">Ocorreu um erro!</h1>
      <p className="text-xl">Página não encontrada</p>
      <p className="text-sm animate-pulse">Toque para voltar ao inicio...</p>
    </div>
  )
}

export default Page404
