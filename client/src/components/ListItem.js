import TickIcon from './TickIcon'
import ProgressBar from './ProgressBar'
const ListItem = ({ task }) => {
  return (
    <li className="list-item">
      <div className="info-container">
        <TickIcon />
        <h3 className="task-title">{task.title}</h3>
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