import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import matchesReducer from './redux/matchesSlice';
import MatchList from './components/MatchList';

const store = configureStore({
  reducer: {
    matches: matchesReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Sports Score Management App</h1>
        <MatchList />
      </div>
    </Provider>
  );
}

export default App;
