import {Component} from "react"
import WeatherItem from ".//WeatherItem"
import "./index.css";
 
class WeatherSearch extends Component{

    state = {searchInput: "", weatherList : []}

    submitForm =async event => {
        event.preventDefault()
        const {searchInput} = this.state

        const response = await fetch("api.openweathermap.org/data/2.5/forecast?q={`${searchInput}`}&appid="880e98103dcfcfa804b8dbb659ff51d8"")
        const data = await response.json()
        const fetchedData = data.map(eachItem => ({
            currentLocation : data.current_location,
            temperature: data.temperature,
            dateandtime: data.date_and_time
        }))

        this.setState({weatherList: fetchedData})

    }

    onChangeSearchInput = event => {
        this.setState({searchInput: event.target.value})
    }

    render(
        const {weatherList} = this.state

        return(
            <>
                <div className="bg_container">
                    <form onSubmit={this.submitForm}>
                        <input type="search" onChange={this.onChangeSearchInput} />
                        <button type="submit"></button>
                    </form>
                </div>
                {weatherList.map(each => ({
                    <WeatherItem dataList={each}/>
                }))}
            </>
        )
    )
}

export default WeatherSearch