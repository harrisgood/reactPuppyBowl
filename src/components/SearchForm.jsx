import { useState } from "react"

const SearchForm = ({playerList, setPlayerList}) => {
  const [userFilter, setUserFilter] = useState('')
  // create array of all puppy names
  const puppyNames = playerList.map(puppy => { return puppy.name })

  const handleTyping = (e) => {
    // store what user types as their filter
    setUserFilter(e.target.value)
    const filteredNames = puppyNames.filter(currentPuppyName => 
      currentPuppyName.toLowerCase().includes(userFilter.toLowerCase())
    )
    const filteredPuppies = []
    filteredNames.forEach((currentName) => {
      playerList.forEach(currentPuppy => {
        if(currentPuppy.name===currentName){
          filteredPuppies.push(currentPuppy)
        }
      })
      // filteredPuppies.push(playerList.find( currentPuppy => {currentPuppy.name === currentName}))
    })
    setPlayerList(filteredPuppies)
    // console.log(playerList)
    console.log(filteredNames)
    console.log(filteredPuppies)
    
  }

  return (
    <>
      <form>
        <label>
          Puppy Name: <input value={userFilter} onChange={handleTyping}/>
        </label>
      </form>
    </>
  )
}

export default SearchForm