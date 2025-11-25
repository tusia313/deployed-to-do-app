import { useState } from "react"
import { useCookies } from "react-cookie"
const Modal = ({ mode, setShowModal, getData, task }) => {
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const editMode = mode === "edit" ? true : false

  const [data, setData] = useState({
    user_email: editMode ? task.user_email : cookies.Email,
    title: editMode ? task.title : "",
    progress: editMode ? Number(task.progress) : 50,
    date: editMode ? task?.date : new Date().toISOString()
  })

  const handleChange = (e) => {
    // jakby to jest to samo co oddzielnie nazwac e.target.name i e.target.value
    const { name, value } = e.target
    setData(prev => ({
      ...prev,
      // kochane algorytmy : teraz nadpisujemy obiekt data, ale tylko to co sie zmienilo
      [name] : name === 'progress' ? Number(value) : value
    }))
    console.log("To sa teraz nasze dane: ", data)
  }
  const postData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      console.log("Response status: ", response.status)
      if (response.ok) {
        console.log("IT WORKED!")
        setShowModal(false)
        getData()
      }
    } catch (error) {
      console.error("Error posting data: ", error)
    }
  }

  const editData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos/${task.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (response.ok) {
        console.log("Edit worked!")
        setShowModal(false)
        getData()
      }
    } catch (error) {
      console.error("Error editing data from frontend: ", error)
    }
  }

  const onSubmit = (e) => {
      e.preventDefault()
    if (editMode) {
      editData()
  } else {
      postData()
  }
}
  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-title-container">
          <h2>Let's {mode} some task!</h2>
          <button onClick={() => setShowModal(false)}>x</button>
        </div>
        <form onSubmit={onSubmit} className="form-container">
          <input
            required
            maxLength={30}
            placeholder="you're task goes here..."
            name="title"
            value={data.title}
            onChange={handleChange}
          />
          <label htmlFor="range">Drag to select Your current progress</label>
          <input
            type="range"
            name="progress"
            id="range"
            min={0}
            max={100}
            value={data.progress}
            onChange={handleChange}
            style={{
              accentColor: "var(--color2)"
            }}
          />
          <input
            className={mode}
            type="submit"
          />
        </form>
      </div>
    </div>
  )
}
export default Modal