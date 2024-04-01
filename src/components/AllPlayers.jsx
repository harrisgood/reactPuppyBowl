import { useState, useEffect } from "react"
import PlayerCard from "./PlayerCard"
import SinglePlayer from "./SinglePlayer"

const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-FT`

const AllPlayers = () => {
  const [playerList, setPlayerList] = useState([])
  const [detailsPage, setDetailsPage] = useState(false)
  const [highlightedPuppy, setHighlightedPuppy] = useState({})
  

  useEffect(() => {
    fetchPlayerData();
  }, [])

  const fetchPlayerData = async () => {
    try {const apiResponse = await fetch(`${API_URL}/players`)
    const jsonPlayers = await apiResponse.json()

    const playerData = jsonPlayers.data.players

    setPlayerList(playerData)

    } catch (error) {
      console.log(error)
    }
  }
  
  
  return (
    detailsPage ? 
        <SinglePlayer highlightedPuppy={highlightedPuppy} detailsPage={detailsPage} setDetailsPage={setDetailsPage}/>
      :
        <>
          <h2>This Year's Athletes</h2>
          <ul>
            {playerList.map((currentPuppy, index) => {
              return (<PlayerCard key={index} currentPuppy={currentPuppy} detailsPage={detailsPage} setDetailsPage={setDetailsPage} setHighlightedPuppy={setHighlightedPuppy} />
            )})}
            
          </ul>
        </>
  )
}

export default AllPlayers