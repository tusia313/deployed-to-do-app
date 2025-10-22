import ListHeader from './components/ListHeader'
import ListItem from './components/ListItem'
import { useEffect, useState } from 'react'
import TreeIcon from './components/TreeIcon'

const App = () => {
  const userEmail = 'loskotmarta@gmail.com'
  const [tasks, setTasks] = useState()
  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`)
      const json = await response.json()
      setTasks(json)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => { getData() }, [])
  console.log("Wyświetlam json: ", tasks)
  //sort yasks by date
  const sortedTasks = tasks?.sort((a, b) => new Date(a.date) - new Date(b.date))

  return (
    <div className="app">
      <div className='header-container'>
        <TreeIcon />
        <ListHeader listName={"December tick list"} />
      </div>
      {sortedTasks?.map((task) => <ListItem key={tasks.id} task={task} />)}
    </div>
  )
}

export default App
