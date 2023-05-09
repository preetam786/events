import {Component} from 'react'
import './index.css'

const registrationStatusConstants = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

class ActiveEventRegistrationDetails extends Component {
  renderInitialEventSection = () => (
    <div className="active-event-initial-details-container">
      <p className="active-event-initial-details">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  renderYetToRegisterEvent = () => (
    <div className="yet-to-register-event">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        className="yet-to-register-image"
        alt="yet to register"
      />
      <p className="yet-to-register-details">
        A live performance brings so much to your relationship with dance
      </p>
      <button type="button" className="register-button">
        Register Here
      </button>
    </div>
  )

  renderRegisteredEvent = () => (
    <div className="registered-event">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        className="registered-image"
        alt="registered"
      />
      <h1 className="registered-details">
        You have already registered for the event
      </h1>
    </div>
  )

  renderRegistrationsClosedEvent = () => (
    <div className="registrations-closed-event">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        className="registrations-closed-image"
        alt="registrations closed"
      />
      <h1 className="registrations-closed-details">
        Registrations Are Closed Now!
      </h1>
      <p className="registrations-closed-details-instruction">
        Stay tuned. We will reopen
      </p>
    </div>
  )

  getActiveEventRegistrationStatus = () => {
    const {eventsList, activeEventId} = this.props
    let status = ''
    const activeEvent = eventsList.filter(
      eachEvent => eachEvent.id === activeEventId,
    )
    if (activeEvent.length !== 0) {
      const {registrationStatus} = activeEvent[0]
      status = registrationStatus
    }
    return status
  }

  render() {
    const registrationStatus = this.getActiveEventRegistrationStatus()

    switch (registrationStatus) {
      case registrationStatusConstants.yetToRegister:
        return this.renderYetToRegisterEvent()
      case registrationStatusConstants.registered:
        return this.renderRegisteredEvent()
      case registrationStatusConstants.registrationsClosed:
        return this.renderRegistrationsClosedEvent()
      default:
        return this.renderInitialEventSection()
    }
  }
}
export default ActiveEventRegistrationDetails
