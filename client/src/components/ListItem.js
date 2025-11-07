import TickIcon from './TickIcon'
import ProgressBar from './ProgressBar'
import Modal from './Modal'
import { useState } from "react"

const ListItem = ({task, getData}) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <li className="list-item">
      <div className="info-container">
        <TickIcon />
        <h3 className="task-title">{task.title}</h3>
        <ProgressBar />
      </div>
      <div className='button-container'>
        <button className="edit" onClick={() => setShowModal(true)}>edit</button>
        <button className="delete">delete</button>
      </div>
      {showModal && <Modal mode={'edit'} setShowModal={setShowModal} getData = {getData} task={task} />}
    </li>
  )
}
export default ListItem