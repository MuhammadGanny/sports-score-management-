// redux/teamsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const teamsSlice = createSlice({
  name: 'teams',
  initialState: [],
  reducers: {
    addTeam: (state, action) => {
      state.push({ id: state.length + 1, name: action.payload.name });
    },
    deleteTeam: (state, action) => {
      return state.filter(team => team.id !== action.payload.id);
    },
    updateTeam: (state, action) => {
      const { id, name } = action.payload;
      const teamToUpdate = state.find(team => team.id === id);
      if (teamToUpdate) {
        teamToUpdate.name = name;
      }
    },
    // You can define more reducer actions here if needed
  },
});
// export const getTeamById = (state, teamId) => {
//     return state.find((team) => team.id === teamId);
// };
export const getTeamById = (state, teamId) => {
    const parsedTeamId = parseInt(teamId, 10); // Convert teamId to integer
    return state.find((team) => team.id === parsedTeamId);
  };
  
  
export const { addTeam, deleteTeam, updateTeam } = teamsSlice.actions;
export default teamsSlice.reducer;
