import React, { useState } from "react";
import axios from 'axios';

export default function SearchEngine() {
    let [city, setCity] = useState("New york");
    let [data, setData] = useState(" ");
    // let [load, setLoad] = useState(false);

 function fetchData(response) {
     console.log(response.data);
    //  setLoad(true);
     setData({
         temperature: response.data.main.temp,
         name: response.data.name,
         description: response.data.weather[0].description,
         humidity: response.data.main.humidity,
         wind: response.data.wind.speed,
         icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
     });
     

        
    }

    function handleSubmit(event) {
        event.preventDefault();


    let key = "2a2eaa51d996796495bf456e5b58adf4";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

    axios.get(url).then(fetchData);
    }
    function updateCity(event) {
        setCity(event.target.value);
    }
    


        return (
            <div className="Overview">
                <form id="search-form" className="mb-3" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input
                                type="search"
                                placeholder="Type a city.."
                                className="form-control"
                                id="city-input"
                                autoComplete="off"
                                onChange={updateCity}
                            />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-primary w-100" />
                        </div>
                    </div>
                </form>
                <div className="Data">
                    <ul>
                        <li className="fs-1 text-tertiary"> <h1>{data.name}</h1></li>
                        <li id="date">Friday 07:25</li>
                        <li id="description">{data.description}</li>
                    </ul>
                    <div className="row">
                        <div className="col-6">
                            <div className="weatherIcon">
                                <img
                                    src={data.icon}
                                    alt={data.description}
              
                                />
                                <strong className="Temperature">
                                    {Math.round(data.temperature)}
                                    <span className="degreeValue text-secondary">°C</span>
                                </strong>
                            </div>
           
                        </div>
                        <div className="col-6">
                            <ul>
                                <li id="humidity">humidity: {data.humidity}%</li>
                                <li id="wind">wind: {data.wind}km/h</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    
   
}
