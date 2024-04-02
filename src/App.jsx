import './App.css'
import AllPlayers from './components/AllPlayers.jsx'
import NewPlayerForm from './components/NewPlayerForm.jsx'

function App() {
  const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-FT`
  return (
    <>
      <h1>Puppy Bowl MMXXIV II</h1>
      <NewPlayerForm API_URL={API_URL}/>
      <AllPlayers API_URL={API_URL}/>
    </>
  )
}

export default App
