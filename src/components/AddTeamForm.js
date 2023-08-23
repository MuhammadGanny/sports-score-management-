// components/AddTeamForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTeam } from '../redux/teamsSlice';

const AddTeamForm = () => {
  const dispatch = useDispatch();
  const [teamName, setTeamName] = useState('');

  const handleAddTeam = () => {
    if (teamName.trim() !== '') {
      dispatch(addTeam({ name: teamName }));
      setTeamName('');
    }
  };

  return (
    <div className="add-team-form">
      <h3>Add a New Team</h3>
      <input
        type="text"
        placeholder="Enter team name"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
      />
      <button onClick={handleAddTeam}>Add Team</button>
    </div>
  );
};

export default AddTeamForm;
