import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Location from '../Location'

import './index.css'

class TravelGuide extends Component {
  state = {
    packages: [],
  }

  componentDidMount = () => {
    this.getData()
  }

  getData = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(url)
    const data = await response.json()
    if (response.ok) {
      this.setState({
        packages: data.packages,
      })
    }
  }

  render() {
    const {packages} = this.state
    return (
      <ul className="app-container">
        <h1 className="main-heading">Travel Guide</h1>
        {packages.length === 0 ? (
          <div data-testid="loader" className="loader-container">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <li className="locations-container">
            {packages.map(eachItem => (
              <Location key={eachItem.id} loc={eachItem} />
            ))}
          </li>
        )}
      </ul>
    )
  }
}

export default TravelGuide
