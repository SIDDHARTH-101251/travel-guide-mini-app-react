import './index.css'

const Location = props => {
  const {loc} = props
  const updatedLocData = {
    id: loc.id,
    name: loc.name,
    imageUrl: loc.image_url,
    description: loc.description,
  }

  const {name, imageUrl, description} = updatedLocData

  return (
    <li className="location-container">
      <img src={imageUrl} alt={name} className="location-image" />
      <div className="location-description-container">
        <h1 className="location-name">{name}</h1>
        <h1 className="location-description">{description}</h1>
      </div>
    </li>
  )
}

export default Location
