import { useState, useEffect } from "react"
import PlayerCard from "./PlayerCard"
import { API_URL } from "../App"
import SearchForm from "./SearchForm"

const AllPlayers = ({ detailPuppy, setDetailPuppy }) => {
  const [playerList, setPlayerList] = useState([])
  const [renderList, setRenderList] = useState(playerList)
  
  useEffect(() => {
    fetchPlayerData();
  }, [])

  const fetchPlayerData = async () => {
    try {const apiResponse = await fetch(`${API_URL}/players`)
    const jsonPlayers = await apiResponse.json()

    const playerData = jsonPlayers.data.players

    setPlayerList(playerData)
    setRenderList(playerData)
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <>
      
      <h3>Filter by Name:</h3>
      <SearchForm playerList={playerList} setRenderList={setRenderList}  />

      <h2>This Year's Athletes</h2>
      <div>
        {renderList.map((currentPuppy, index) => {
          return (<PlayerCard key={index} currentPuppy={currentPuppy} setDetailPuppy={setDetailPuppy} />
        )})}
      </div>
    </>
  )
}

export default AllPlayers