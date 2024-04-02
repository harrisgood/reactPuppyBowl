import DeletePuppy from "./DeletePuppy"
import { Link } from "react-router-dom"
const SinglePlayer = ({setDetailPuppy, detailPuppy}) => {
  console.log('detailPuppy: ', detailPuppy)
  return (
    <div>
      <img src={detailPuppy.imageUrl} alt='an athlete in the 2024 puppy bowl' />
      <h3>{detailPuppy.name}</h3>
      <p>{detailPuppy.breed}</p>
      <p>{`Status: ${detailPuppy.status}`}</p>
      <Link to="/">Go Back</Link>
      <DeletePuppy puppyToDelete={detailPuppy} />
    </div>
  )
}

export default SinglePlayer