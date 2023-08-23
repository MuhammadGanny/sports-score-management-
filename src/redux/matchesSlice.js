






// redux/matchesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    team1: 'Team A',
    team2: 'Team B',
    score1: 0,
    score2: 0,
  },
  {
    id: 2,
    team1: 'Team C',
    team2: 'Team D',
    score1: 0,
    score2: 0,
  },
  // Add more sample matches
];

const matchesSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {
    updateScore: (state, action) => {
      const { id, score1, score2 } = action.payload;
      const matchIndex = state.findIndex(match => match.id === id);

      if (matchIndex !== -1) {
        const updatedMatch = { ...state[matchIndex], score1, score2 };
        state[matchIndex] = updatedMatch;
      }
    },
    // You can define more reducer actions here if needed
  },
});

export const { updateScore } = matchesSlice.actions;
export default matchesSlice.reducer;





// redux/matchesSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const matchesSlice = createSlice({
//   name: 'matches',
//   initialState: [], // Initial state of the match data
//   const initialState = [
//     {
//       id: 1,
//       team1: 'Team A',
//       team2: 'Team B',
//       score1: 0,
//       score2: 0,
//     },
//     {
//       id: 2,
//       team1: 'Team C',
//       team2: 'Team D',
//       score1: 0,
//       score2: 0,
//     },
//     // Add more sample matches
//   ];
  
//   reducers: {
//     updateScore: (state, action) => {
//       const { id, score1, score2 } = action.payload;
//       // Find the index of the match in the state array
//       const matchIndex = state.findIndex(match => match.id === id);

//       if (matchIndex !== -1) {
//         // Create a new match object with updated scores
//         const updatedMatch = { ...state[matchIndex], score1, score2 };
        
//         // Update the state by replacing the old match with the updated one
//         state[matchIndex] = updatedMatch;
//       }
//     },
//     // You can define more reducer actions here if needed
//   },
// });

// export const { updateScore } = matchesSlice.actions;
// export default matchesSlice.reducer;
