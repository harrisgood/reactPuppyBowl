import { API_URL } from "../App"

const DeletePuppy = ({puppyToDelete}) => {
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