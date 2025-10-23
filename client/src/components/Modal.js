const Modal = () => {
  const handleChange = () => {
    console.log("handlimg changes!")
  }
  const mode = "edit"
  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-title-container">
          <h2>Let's {mode} some task!</h2>
          <button>x</button>
        </div>
        <form>
          <input
            required
            maxLength={30}
            placeholder="you're task goes here..."
            name="title"
            value={""}
            onChange={handleChange}
          />
          <input
            type="range"
            name="progress"
            min={0}
            max={100}
            value={""}
            onChange={handleChange}
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