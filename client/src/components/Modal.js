import { useState } from "react"
const Modal = ({ mode, setShowModal, getData, task }) => {

  const editMode = mode === "edit" ? true : false

  const [data, setData] = useState({
    user_email: editMode ? task.user_email : 'loskotmarta@gmail.com',
    title: editMode ? task.title : "",
    progress: editMode ? task.progress : 50,
    date: editMode ? "" : new Date().toISOString()
  })

  const handleChange = (e) => {
    // jakby to jest to samo co oddzielnie nazwac e.target.name i e.target.value
    const { name, value } = e.target
    setData(prev => ({
      ...prev,
      // kochane algorytmy : teraz nadpisujemy obiekt data, ale tylko to co sie zmienilo
      [name]: value
    }))
    console.log("To sa teraz nasze dane: ", data)
  }
  const postData = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:8000/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      console.log("Response status: ", response.status)
      if (response.status === 200) {
        console.log("IT WORKED!")
        setShowModal(false)
        getData()
      }
    } catch (error) {
      console.error("Error posting data: ", error)
    }
  }

  const editData = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`http://localhost:8000/todos/${task.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (response.status === 200) {
        console.log("Edit worked!")
        setShowModal(false)
        getData()
      }
    } catch (error) {
      console.error("Error editing data from frontend: ", error)
    }
  }
  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-title-container">
          <h2>Let's {mode} some task!</h2>
          <button onClick={() => setShowModal(false)}>x</button>
        </div>
        <form onSubmit={postData}>
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
              accentColor: "rgb(50, 200, 100)"
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