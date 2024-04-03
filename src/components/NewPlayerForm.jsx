import { useState } from "react"
import { API_URL } from "../App"

const NewPlayerForm = () => {
  const [name, setName] = useState('')
  const [breed, setBreed] = useState('')
  const [image, setImage] = useState('')

  const addPlayer = async (event) => {
    event.preventDefault()
    try{
      const response = await fetch(`${API_URL}/players`,
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            name: `${name}`,
            breed: `${breed}`, 
            imageUrl: `${image}`,
            status: `field`
          })
        }
      )
      const result = await response.json()
      console.log(result)
    } catch(error){
      console.log(error)
    }
  }

  return (
    <div className="formDiv">
      <form onSubmit={addPlayer}>
        <label>
          Puppy Name: <input value={name} onChange={(e) => {setName
          (e.target.value)}}/>
        </label> <br />

        <label>
          Puppy Breed: <input value={breed} onChange={(e) => {setBreed
          (e.target.value)}}/>
        </label> <br />

        <label>
          Image URL: <input value={image} onChange={(e) => {setImage
          (e.target.value)}}/> <br />
        </label>
        <button>Add Puppy</button>
      </form>
    </div>
  )
}

export default NewPlayerForm