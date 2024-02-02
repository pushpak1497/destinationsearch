import './index.css'

const DestinationItem = props => {
  const {details} = props
  const {imgUrl, name} = details
  return (
    <li>
      <img src={imgUrl} className="image" alt={name} />
      <p>{name}</p>
    </li>
  )
}
export default DestinationItem
