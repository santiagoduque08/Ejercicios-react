import React, { useState } from 'react';

const Contador = () => {
  const [cuenta, setCuenta] = useState(0);

  const incrementar = () => {
    setCuenta(cuenta + 1);
  };

  const decrementar = () => {
    if (cuenta > 0) {
      setCuenta(cuenta - 1);
    }
  };

  return (
    <div>
      <h2>Contador: {cuenta}</h2>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
};

export default Contador;
