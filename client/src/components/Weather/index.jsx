import { useEffect, useState } from 'react';
import './Weather.css';
import axios from 'axios';

function Weather() {
  const [temperature, setTemperature] = useState(0);

  useEffect(() => {
    axios(
      'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current_weather=true'
    ).then((data) => {
      setTemperature(data.data.current_weather.temperature);
    });
  }, []);

  return (
    <div className="weatherContainer">
      <span>
        Сьогодні до {temperature} {'\u2103'}. Приємних покупок)
      </span>
    </div>
  );
}

export default Weather;
