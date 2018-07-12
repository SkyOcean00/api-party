import React, { Component } from 'react'
import Github from './Github';
import key from './Key'

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
        fetch(`api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&APPID=${key.APPID}`)
        //fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&APPID=f9abf2449b629016fb0bfb171528aecb`)
            .then(response => response.json())            // parse the response json into JavaScript object(s)
            .then(zip => this.setState({ zip }))
            .then(zip => console.log(zip))        // log the parsed users to the console
            .catch(error => console.warn(error))      // if any errors occur, log them to the console
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