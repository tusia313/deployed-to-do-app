import ListHeader from './components/ListHeader'
import { useEffect, useState } from 'react'

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
  tasks?.sort((a, b) => new Date(a.date) - new Date(b.date)) 

  return (
    <div className="app">
      <ListHeader listName={"🎄 December tick list"} />
    </div>
  )
}

export default App
