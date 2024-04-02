
const PlayerCard = ({currentPuppy, detailPuppy, setDetailPuppy, setHighlightedPuppy}) => {
  

  const handleClick = () => {
    setDetailPuppy(currentPuppy)
  }
  return (
    <>
        <div>
          <img src={currentPuppy.imageUrl} alt='an athlete in the 2024 puppy bowl' />
          <h3>{currentPuppy.name}</h3>
          <button onClick={handleClick}>See Details</button>
        </div>      
    </>
    
  )
}

export default PlayerCard