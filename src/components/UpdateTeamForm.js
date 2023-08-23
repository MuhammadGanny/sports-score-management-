// components/UpdateTeamForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTeam } from '../redux/teamsSlice';

const UpdateTeamForm = ({ team }) => {
  const dispatch = useDispatch();
  const [newName, setNewName] = useState('');

  const handleUpdateTeam = () => {
    if (newName.trim() !== '') {
      dispatch(updateTeam({ id: team.id, name: newName }));
      setNewName('');
    }
  };

  return (
    <div className="update-team-form">
      <h3>Update Team Name</h3>
      <input
        type="text"
        placeholder="Enter new team name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={handleUpdateTeam}>Update Team</button>
    </div>
  );
};

export default UpdateTeamForm;
