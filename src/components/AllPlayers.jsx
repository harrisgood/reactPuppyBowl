import { useState, useEffect } from "react"
import PlayerCard from "./PlayerCard"
import SinglePlayer from "./SinglePlayer"

const AllPlayers = ({API_URL}) => {
  const [playerList, setPlayerList] = useState([])
  const [detailPuppy, setDetailPuppy] = useState({})
  
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
    detailPuppy.name ? 
        <SinglePlayer detailPuppy={detailPuppy} setDetailPuppy={setDetailPuppy}/>
      :
        <>
          <h2>This Year's Athletes</h2>
          <ul>
            {playerList.map((currentPuppy, index) => {
              return (<PlayerCard key={index} currentPuppy={currentPuppy} detailPuppy={detailPuppy} setDetailPuppy={setDetailPuppy} />
            )})}
          </ul>
        </>
  )
}

export default AllPlayers