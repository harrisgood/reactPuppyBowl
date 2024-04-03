import { useState, useEffect } from "react"
import PlayerCard from "./PlayerCard"
import { API_URL } from "../App"
import SearchForm from "./SearchForm"

const AllPlayers = ({detailPuppy, setDetailPuppy}) => {
  const [playerList, setPlayerList] = useState([])
  
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
        <>
          
          <h3>Filter by Name:</h3>
          <SearchForm playerList={playerList} setPlayerList={setPlayerList}  />

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