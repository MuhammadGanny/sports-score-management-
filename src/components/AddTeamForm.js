// components/AddTeamForm.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Import both useSelector and useDispatch
import { addTeam } from '../redux/teamsSlice';

const AddTeamForm = () => {
  const dispatch = useDispatch();
  const teams = useSelector(state => state.teams); // Use useSelector to access the teams state

  const [teamName, setTeamName] = useState('');

  const handleAddTeam = () => {
    if (teamName.trim() !== '') {
      const newTeam = { id: teams.length + 1, name: teamName };
      dispatch(addTeam(newTeam));
      setTeamName('');
    } 
  };
  // const handleAddTeam = () => {
  //   if (teamName.trim() !== '') {
  //     dispatch(addTeam({ name: teamName }));
  //     setTeamName('');
  //   }
  // };

  return (
    <div className="add-team-form">
      <h3>Add a New Team</h3>
      <input
        type="text"
        placeholder="Enter team name"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
      />
      <button className="add-team-btn" onClick={handleAddTeam}>Add Team</button>
    </div>
  );
};

export default AddTeamForm;
