import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import matchesReducer from './redux/matchesSlice';
import MatchList from './components/MatchList';
import teamsReducer from './redux/teamsSlice'; // Import the new teams reducer
import AddTeamForm from './components/AddTeamForm'; // Import the AddTeamForm component
import TeamList from './components/TeamList'; // Import the TeamList component
import AddMatchForm from './components/AddMatchForm';
import './index';

// const store = configureStore({
//   reducer: {
//     matches: matchesReducer,
//   },
// });
const store = configureStore({
  reducer: {
    matches: matchesReducer,
    teams: teamsReducer, // Add the new teams reducer
  },
});

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Sports Score Management App</h1>
        <AddTeamForm /> {/* Add the AddTeamForm component */}
        <TeamList /> {/* Add the TeamList component */}
        <AddMatchForm /> {/* Add the AddMatchForm component */}
        <MatchList />
      </div>
    </Provider>
  );
}

export default App;
