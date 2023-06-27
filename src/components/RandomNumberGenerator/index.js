// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  generateRandomNumber = () => {
    this.setState(prevCount => ({
      count: prevCount.count + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.generateRandomNumber}
          >
            Generate
          </button>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
