import { Link } from 'react-router-dom'

const PlayerCard = ({ currentPuppy, detailPuppy, setDetailPuppy }) => {
  

  const handleClick = () => {
    setDetailPuppy(currentPuppy)
  }

  return (
    <>
        <div onClick={handleClick}>
          <img src={currentPuppy.imageUrl} alt='an athlete in the 2024 puppy bowl' />
          <h3>{currentPuppy.name}</h3>
          <Link to='/singleplayer'>See Details</Link>
        </div>      
    </>
  )
}

export default PlayerCard