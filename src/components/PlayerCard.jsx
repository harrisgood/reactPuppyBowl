
const PlayerCard = ({currentPuppy, detailsPage, setDetailsPage, setHighlightedPuppy}) => {
  

  const handleClick = () => {
    setHighlightedPuppy(currentPuppy)
    setDetailsPage(!detailsPage)
  }
  return (
    <>
        <div>
          <h3>{currentPuppy.name}</h3>
          <p>{currentPuppy.breed}</p>
          <button onClick={handleClick}>See Details</button>
        </div>      
    </>
    
  )
}

export default PlayerCard