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
    // You can define more reducer actions here if needed
  },
});

export const { addTeam, deleteTeam } = teamsSlice.actions;
export default teamsSlice.reducer;
