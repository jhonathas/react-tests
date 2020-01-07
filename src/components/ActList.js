import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

export default function ActList() {
  const cars = useSelector(state => state.data.cars);
  const dispatch = useDispatch();

  function addCar() {
    dispatch({ type: 'ADD_CAR', title: 'Honda Fit'})
  }

  return (
    <>
      <ul>
        { cars.map(car => <li key={car}>{car}</li>) }
      </ul>

      <button type="button" onClick={addCar}>
        Incluir carro
      </button>
    </>
  );
}
