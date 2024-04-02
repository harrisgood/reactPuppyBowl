import './App.css'
import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import SinglePlayer from "./components/SinglePlayer"
import HomePage from "./components/HomePage"

const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-FT`
export {API_URL}


function App() {
  const [detailPuppy, setDetailPuppy] = useState({})
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage detailPuppy={detailPuppy} setDetailPuppy={setDetailPuppy} />} />
        <Route path='/singleplayer' element={<SinglePlayer detailPuppy={detailPuppy} setDetailPuppy={setDetailPuppy} />} />
      </Routes>
    </>
  )
}

export default App
