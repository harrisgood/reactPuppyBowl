
const SinglePlayer = ({highlightedPuppy, detailsPage, setDetailsPage}) => {
  console.log('highlightedPuppy: ', highlightedPuppy)
  return (
    <div>
      <img src={highlightedPuppy.imageUrl} alt='an athlete in the 2024 puppy bowl' />
      <h3>{highlightedPuppy.name}</h3>
      <p>{highlightedPuppy.breed}</p>
      <p>{`Status: ${highlightedPuppy.status}`}</p>
      <button onClick={() => {setDetailsPage(!detailsPage)}}>Go Back</button>
    </div>
  )
}

export default SinglePlayer