import React, { useState } from 'react';

function ConversorTemperatura() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const convertirACelsius = (valor) => {
    const temperaturaCelsius = (valor - 32) * (5 / 9);
    setCelsius(temperaturaCelsius.toFixed(2));
  };

  const convertirAFahrenheit = (valor) => {
    const temperaturaFahrenheit = (valor * 9) / 5 + 32;
    setFahrenheit(temperaturaFahrenheit.toFixed(2));
  };

  const handleCelsiusChange = (event) => {
    const valor = parseFloat(event.target.value);
    setCelsius(event.target.value);
    convertirAFahrenheit(valor);
  };

  const handleFahrenheitChange = (event) => {
    const valor = parseFloat(event.target.value);
    setFahrenheit(event.target.value);
    convertirACelsius(valor);
  };

  return (
    <div>
      <div>
        <label>Temperatura en Celsius:</label>
        <input
          type="number"
          value={celsius}
          onChange={handleCelsiusChange}
        />
      </div>
      <div>
        <label>Temperatura en Fahrenheit:</label>
        <input
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
        />
      </div>
    </div>
  );
}

export default ConversorTemperatura;
