import DeletePuppy from "./DeletePuppy"
import { Link } from "react-router-dom"

const SinglePlayer = ({ detailPuppy }) => {
  return (
    <div className="singlePlayerPage">
      <img className='singlePlayerPageImg' src={detailPuppy.imageUrl} alt='an athlete in the 2024 puppy bowl' />
      <div className="detailedPlayerCard">
        <h3>{detailPuppy.name}</h3>
        <p>{detailPuppy.breed}</p>
        <p>{`Status: ${detailPuppy.status}`}</p>
        <Link to="/">Go Back</Link>
        <DeletePuppy puppyToDelete={detailPuppy} />
      </div>
    </div>
  )
}

export default SinglePlayer