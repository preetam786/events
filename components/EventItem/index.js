import './index.css'

const EventItem = props => {
  const {event, getActiveEvent} = props
  const {id, imageUrl, name, location} = event

  const onClickEvent = () => {
    getActiveEvent(id)
  }

  return (
    <li className="event-list-item">
      <button
        type="button"
        className="event-item-button"
        onClick={onClickEvent}
      >
        <img src={imageUrl} className="event-image" alt="event" />
        <p className="event-item-title">{name}</p>
        <p className="event-item-place">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
