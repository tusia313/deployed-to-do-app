import { useState } from "react"
const Modal = ({modal, setShowModal}) => {
  const mode = "create"
  const editMode = mode === "edit" ? true : false
  const [data, setData] = useState({
    user_email:"",
    title:"",
    progress: "",
    date: editMode ? "" : new Date()
  })
  const handleChange = (e) => {
    // jakby to jest to samo co oddzielnie nazwac e.target.name i e.target.value
    const {name, value} = e.target
    setData(data => ({
      ...data,
      // kochane algorytmy : teraz nadpisujemy obiekt data, ale tylko to co sie zmienilo
      [name]: value
    }))
    console.log("To sa teraz nasze dane: " , data)
  }
  
  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-title-container">
          <h2>Let's {mode} some task!</h2>
          <button onClick={()=> setShowModal(false)}>x</button>
        </div>
        <form>
          <input
            required
            maxLength={30}
            placeholder="you're task goes here..."
            name="title"
            value={data.title}
            onChange={handleChange}
          />
          <label for="range">Drag to select Your current progress</label>
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