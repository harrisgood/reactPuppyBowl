
const DeletePuppy = ({puppyToDelete}) => {
  const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-FT`
  const deleteOnClick = async (event) => {
    event.preventDefault()
    console.log(puppyToDelete)
    try{
      const response = await fetch(`${API_URL}/players/${puppyToDelete.id}`, 
      {
        method: 'DELETE',
      })
      const result = await response.json();
      console.log(result)
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <>
      <button onClick={deleteOnClick}>Remove from Roster</button>
    </>
  )
}

export default DeletePuppy