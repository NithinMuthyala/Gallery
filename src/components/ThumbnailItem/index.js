import './index.css'

const ThumbnailItem = props => {
  const {eachImg, imageClicked} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachImg
  const imgClicked = () => {
    imageClicked(id)
  }

  return (
    <li className="item">
      <button type="button" onClick={imgClicked}>
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
