const Modal = () => {
  const mode = "add"
  return (
    <div className="modal">
      <div className="overlay">
        <div className="form-title-container">
          <h2>Let's {mode} some task!</h2>
          <button>x</button>
          </div>

          <form>
            <input
              type="text"
              placeholder="Task Title"
              onChange={handleChange}
            />
            <input>
            </input>
            <input>
            </input>
          </form>
        
      </div>
    </div>
  )
}
export default Modal