const ListHeader = ({listName}) => {
  return (
    <div className="list-header">
  {/* dzięki {} listName jest tarktowane jako KOD a nie tekst */}
      <h1>{listName}</h1>
    </div>
  )
}
export default ListHeader