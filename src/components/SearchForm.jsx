import { useState, useEffect } from "react"

const SearchForm = ({playerList, renderList, setRenderList}) => {
  const [userFilter, setUserFilter] = useState('')
  
  useEffect(() => {
    filterRenderList();
  }, [userFilter])

  
  const handleTyping = (e) => {
    // store what user types as their filter
    setUserFilter(e.target.value)
  }

  const filterRenderList = () => {
    console.log('hello???')

    const filteredPuppies = playerList.filter(currentPuppy => 
      currentPuppy.name.toLowerCase().includes(userFilter.toLowerCase())
    )

    setRenderList(filteredPuppies)

    console.log(userFilter)
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