import Questions from './utils/Questions'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import InitialScreen from './pages/InitialScreen'
import GameScreen from './pages/GameScreen'
import GameOverScreen from './pages/GameOverScreen'
import GameVictory from './pages/GameVictory'
import Page404 from './pages/Page404'

import { useEffect, useState } from 'react'

function App() {
  const [question, setQuestion] = useState('')
  const [questions, setQuestions] = useState('')
  const [idQuestion, setIdQuestion] = useState(0)
  const [inGame, setInGame] = useState(false)

  useEffect(()=>{
    if(inGame){
      const shuffleQuestions = Questions.sort(()=> Math.random() - 0.5)
      setQuestions(shuffleQuestions)
    }
  },[inGame])

  useEffect(()=>{
    setQuestion(questions[idQuestion])
  },[idQuestion, questions])

  return (
    <main className='w-screen h-screen bg-gradient-to-t from-slate-950 via-pink-900 to-pink-500 flex justify-center cursor-default'>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<InitialScreen setInGame={setInGame} setIdQuestion={setIdQuestion}/>}/>
          <Route path='/game' element={idQuestion < Questions.length
            ? <GameScreen question={question} idQuestion={idQuestion} setIdQuestion={setIdQuestion} setInGame={setInGame}/>
            : <GameVictory setInGame={setInGame}/>}/>
          <Route path='/gameover' element={<GameOverScreen setIdQuestion={setIdQuestion}/>}/>
          <Route element={<Page404/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
