import { createStore } from 'redux';

const INITIAL_STATE = {
  data: {
    cars: ['Fusca', 'Passat']
  }
};

// Reducer
function cars(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_CAR':
      return { ...state, data: { ...state.data, cars: [...state.data.cars, action.title] } };
    default:
      return state;
  }
}


const store = createStore(cars);

export default store;
