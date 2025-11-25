import ListHeader from './components/ListHeader'
import ListItem from './components/ListItem'
import { useEffect, useState } from 'react'
import TreeIcon from './components/TreeIcon'
import Auth from './components/Auth'
import { useCookies } from 'react-cookie'

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const userEmail = cookies.Email
  const authToken = cookies.AuthToken
  const [tasks, setTasks] = useState()

  const getData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/todos/${userEmail}`)
      const json = await response.json()
      setTasks(json)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => { 
    if (authToken) {
      getData()
    }}, [])
  //sort tasks by date
  const sortedTasks = tasks?.sort((a, b) => new Date(a.date) - new Date(b.date))

  return (
    <div className="app">
      {!authToken && <Auth />}
      {authToken && 
      <>
      <div className='header-container'>
        <TreeIcon />
         <ListHeader listName={"December tick list"} getData={getData} />
      </div>
         <p className = 'user-email'>Welcome back { userEmail } !</p>
      {sortedTasks?.map((task) => <ListItem key={task.id} task={task} getData={getData} />)}
      </>}
      <p className = 'copyright'>© jestemdobra by Marta Łoskot</p>
    </div>
  )
}

export default App
