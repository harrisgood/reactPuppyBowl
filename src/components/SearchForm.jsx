import { useState, useEffect } from "react"

const SearchForm = ({playerList, setRenderList}) => {
  const [userFilter, setUserFilter] = useState('')
  
  useEffect(() => {
    filterRenderList();
  }, [userFilter])

  const handleTyping = (e) => {
    // store what user types as their filter
    setUserFilter(e.target.value)
  }

  const filterRenderList = () => {
    const filteredPuppies = playerList.filter(currentPuppy => 
      currentPuppy.name.toLowerCase().includes(userFilter.toLowerCase())
    )
    setRenderList(filteredPuppies)
  }
  
  return (
    <div className="formDiv">
      <form>
        <label>
          Puppy Name: <input value={userFilter} onChange={handleTyping}/>
        </label>
      </form>
    </div>
  )
}

export default SearchForm