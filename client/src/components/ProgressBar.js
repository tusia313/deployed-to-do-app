const ProgressBar = ({progress}) => {
  const color = [
    'rgba(100, 150, 250, 1)',
    'rgba(250, 200, 100, 1)',
    'rgb(200, 100, 250)',
    'rgb(250, 100, 150)',
    'rgb(250, 150, 100)',
    'rgba(52, 229, 111, 1)'
  ]
  const randomColor = color[Math.floor(Math.random() * color.length)]
  return (
    <div className="outer-bar">
      <div className="inner-bar"
      style = {{width : `${progress}%`, backgroundColor : randomColor }} >

      </div>
    </div>
  )
}
export default ProgressBar