// Write your code here.
import './index.css'

const CardItem = props => {
  const {eachCard} = props
  const {title, description, imgUrl, className} = eachCard

  return (
    <li className={`cardStyle ${className}`}>
      <div className="miniCard">
        <h1>{title}</h1>
        <p>{description}</p>
        <img className="imageStyle" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
