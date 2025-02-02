import { useState } from "react";
export const WheatherApp = () => {
  const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
  const API_KEY = 'eabe775b23a1c61c690b67e0f473c5d5'
  const difKelvin = 273.15
    const [ciudad, setCiudad] = useState('');
  const [dataClima,setDataClima] = useState(null);
  const handleCambioCiudad = (e) => {
    setCiudad(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(ciudad.length > 0)fetchClima();
    else alert('Please enter a city');
  };
  
  const fetchClima = async () => {
    try{
      
      const response = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}`);
      const data = await response.json();
      setDataClima(data);
    }
    catch(error){
      console.error('Ocurrio el siguiente error:',error);
    }
    
  }
  return (
    <div className="container">
      <h1>Wheather App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={ciudad} onChange={handleCambioCiudad} placeholder="city" />
        
        <button type="submit">Get Wheather</button>
      </form>

      {dataClima && (
        <div>
          <h2>{dataClima.name}</h2>
          <p>Temperatura: {parseInt(dataClima?.main?.temp - difKelvin)}°C</p>
          <p>Condicion meteorologica:{dataClima.weather[0].description}</p>
          <p>{dataClima.main.temp}</p>
          <img src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`} alt="icon" />
        </div>
      )}
    </div>
  )
}


