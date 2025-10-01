const ListHeader = ({listName}) => {
  const signOut = () => {
    console.log("signing out")
  }
  return (
    <div className="list-header">
  {/* dzięki {} listName jest tarktowane jako KOD a nie tekst */}
      <h1>{listName}</h1>
      <div className="button-container">
        <button className="create">add new</button>
        <button className="signout" onClick={signOut}>sign out</button>
      </div>
    </div>
  )
}
export default ListHeader