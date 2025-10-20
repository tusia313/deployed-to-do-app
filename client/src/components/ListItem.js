import TickIcon from './TickIcon'
import ProgressBar from './ProgressBar'
const ListItem = ({ task }) => {
  return (
    <li className="list-item">
      <div className="info-container">
        <TickIcon />
        <p className="task-title">{task.title}</p>
        <ProgressBar />
      </div>
      <div className='button-container'>
        <button className="edit-button">edit</button>
        <button className="delete-button">delete</button>
      </div>
    </li>
  )
}
export default ListItem