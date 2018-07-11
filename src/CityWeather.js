import React, { Component } from 'react'
import Github from './Github';

class CityWeather extends Component {
    constructor(props) {
        super(props)

        this.state = {
            zip: {}
        }

        this.fetchCityData()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.zipcode !== this.props.match.params.zipcode) {
            this.fetchCityData()
        }
    }

    fetchCityData = () => {
        const { zipcode } = this.props.match.params
        fetch(`api.openweathermap.org/data/2.5/weather?zip=${zipcode},us`)
            .then(response => response.json())
            .then(zip => this.setState({ zip }))
    }

    render() {
        return (
            <div>
                <p>City: {this.state.zip.name}</p>
                {/* <ul >
                    <li>Pressure: {this.state.zip.main.pressure} hpa</li>
                    <li>Humidity: {this.state.zip.main.humidity} %</li>
                    <li>temp: {this.state.zip.main.temp} F</li>
                </ul> */}
            </div>
        )
    }
}

export default CityWeather