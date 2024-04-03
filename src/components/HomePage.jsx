import AllPlayers from './AllPlayers.jsx'
import NewPlayerForm from './NewPlayerForm.jsx'

const HomePage = ({detailPuppy, setDetailPuppy}) => {
  return (
    <>
      <h1>Puppy Bowl MMXXIV II</h1>
      <NewPlayerForm />
      <AllPlayers detailPuppy={detailPuppy} setDetailPuppy={setDetailPuppy}/>
    </>
  )
}

export default HomePage