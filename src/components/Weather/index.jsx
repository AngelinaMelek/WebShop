import { useEffect, useState } from 'react';
import './Weather.css';

function Weather() {
  const [temperature, setTemperature] = useState(0);

  useEffect(() => {
    // DOWNLOAD PLACE
  }, []);

  return (
    <div className="weatherContainer">
      <span>Сьогодні до 10 {'\u2103'}. Приємних покупок)</span>
    </div>
  );
}

export default Weather;
