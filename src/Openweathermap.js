import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import CityWeather from './CityWeather'
import './Github.css'

class Openweathermap extends Component {
  state = {
    zipcode: '',
  }

  handleChange = ev => {
    this.setState({ zipcode: ev.target.value })
  }

  handleSubmit = ev => {
    ev.preventDefault()
    this.props.history.push(`/openweathermap/${this.state.zipcode}`)
  }

  render() {
    return (
      <div className="Github">
        <img
          src="https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/logo_OpenWeatherMap_orange.svg"
          alt="Openweathermap"
          className="logo"
        />

        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              required
              autoFocus
              type="text"
              value={this.state.zipcode}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">
              enter US zipcode code
            </button>
          </div>
        </form>

        <Route
          path="/openweathermap/:zipcode"
          component={CityWeather}
        />
      </div>
    )
  }
}

export default Openweathermap