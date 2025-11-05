import Modal from './Modal'
import { useState } from 'react'
const ListHeader = ({ listName }) => {
  const date = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
const [showModal, setShowModal] = useState(false)

  const signOut = () => {
    console.log("signing out")
  }

  return (
    <div className="list-header">
      {/* dzięki {} listName jest traktowane jako KOD a nie tekst */}
      <h1>{listName}</h1>
      <h2>{date}</h2>
      <div className="button-container">
        <button className="create" onClick={() => setShowModal(true) }>add new</button>
        <button className="signout" onClick={signOut}>sign out</button>
      </div>
      {/* if showModal is true then we can see the whole modal */}
      {showModal && <Modal mode={'create'} setShowModal={setShowModal}/>}
    </div>
  )
}
export default ListHeader