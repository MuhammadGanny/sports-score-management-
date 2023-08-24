// redux/matchesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const matchesSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {
    addMatch: (state, action) => {
      const { team1Id, team2Id } = action.payload;
      state.push({
        id: state.length + 1,
        team1Id,
        team2Id,
        score1: 0,
        score2: 0,
      });
    },
    updateScore: (state, action) => {
      const { id, score1, score2 } = action.payload;
      const matchToUpdate = state.find(match => match.id === id);
      if (matchToUpdate) {
        matchToUpdate.score1 = score1;
        matchToUpdate.score2 = score2;
      }
    },
  },
});

export const { addMatch, updateScore } = matchesSlice.actions;
export default matchesSlice.reducer;







// // redux/matchesSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = [
//   {
//     id: 1,
//     team1: 'Team A',
//     team2: 'Team B',
//     score1: 0,
//     score2: 0,
//   },
//   {
//     id: 2,
//     team1: 'Team C',
//     team2: 'Team D',
//     score1: 0,
//     score2: 0,
//   },
//   // Add more sample matches
// ];

// const matchesSlice = createSlice({
//   name: 'matches',
//   initialState,
//   reducers: {
//     updateScore: (state, action) => {
//       const { id, score1, score2 } = action.payload;
//       const matchIndex = state.findIndex(match => match.id === id);

//       if (matchIndex !== -1) {
//         const updatedMatch = { ...state[matchIndex], score1, score2 };
//         state[matchIndex] = updatedMatch;
//       }
//     },
//     // You can define more reducer actions here if needed
//   },
// });

// export const { updateScore } = matchesSlice.actions;
// export default matchesSlice.reducer;





