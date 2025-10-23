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
            required
            maxLength={60}
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
            type="submit"
            className= {mode}
          />
        </form>

      </div>
    </div>
  )
}
export default Modal