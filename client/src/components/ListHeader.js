import Modal from './Modal'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
const ListHeader = ({ listName, getData, userEmail}) => {
  const [ cookies, setCookie, removeCookie] = useCookies(null)
  const date = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
  const [showModal, setShowModal] = useState(false)

  const signOut = () => {
    console.log("signing out")
    removeCookie('Email', { path: '/' })
    removeCookie('AuthToken', { path: '/' })
    window.location.reload()
  }
  return (
    <div className="list-header">
      {/* dzięki {} listName jest traktowane jako KOD a nie tekst */}
      <h1>{listName}</h1>
      <div className="button-container">
        <h2>{date}</h2>
        <button className="create" onClick={() => setShowModal(true)}>add new</button>
        <button className="signout" onClick={signOut}>sign out</button>
      </div>
      {/* if showModal is true then we can see the whole modal */}
      {showModal && <Modal mode={'create'} setShowModal={setShowModal} getData={getData} />}
    </div>
   
  )
}
export default ListHeader