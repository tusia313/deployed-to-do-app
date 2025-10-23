const ListHeader = ({ listName }) => {
  const date = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
  console.log(Date)
  const signOut = () => {
    console.log("signing out")
  }
  return (
    <div className="list-header">
      {/* dzięki {} listName jest traktowane jako KOD a nie tekst */}
      <h1>{listName}</h1>
      <h2>{date}</h2>
      <div className="button-container">
        <button className="create">add new</button>
        <button className="signout" onClick={signOut}>sign out</button>
      </div>
    </div>
  )
}
export default ListHeader