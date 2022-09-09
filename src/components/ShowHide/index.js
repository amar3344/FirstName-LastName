import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstNameDisplay: true, isLastNameDisplay: true}

  displayFirstName = () => {
    this.setState(prevState => ({
      isFirstNameDisplay: !prevState.isFirstNameDisplay,
    }))
  }

  displayLastName = () => {
    this.setState(prevState => ({
      isLastNameDisplay: !prevState.isLastNameDisplay,
    }))
  }

  render() {
    const {isFirstNameDisplay, isLastNameDisplay} = this.state
    const firstName = isFirstNameDisplay ? 'hidden' : 'shown'
    const lastName = isLastNameDisplay ? 'hidden' : 'shown'

    return (
      <div className="main-container">
        <div className="bg-container">
          <h1 className="heading">Show/Hide</h1>
          <div className="container">
            <div className="card-container">
              <button
                type="button"
                className="button"
                onClick={this.displayFirstName}
              >
                Show/Hide Firstname
              </button>
              <p className={`name-container ${firstName}`}>Joe</p>
            </div>
            <div className="card-container">
              <button
                type="button"
                className="button"
                onClick={this.displayLastName}
              >
                Show/Hide Lastname
              </button>
              <p className={`name-container ${lastName}`}>Jonas</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
