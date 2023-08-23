// components/AddMatchForm.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMatch } from '../redux/matchesSlice';

const AddMatchForm = () => {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams); // Get the teams from the state
  const [selectedTeam1, setSelectedTeam1] = useState('');
  const [selectedTeam2, setSelectedTeam2] = useState('');

  const handleAddMatch = () => {
    if (selectedTeam1 && selectedTeam2 && selectedTeam1 !== selectedTeam2) {
      dispatch(addMatch({ team1Id: selectedTeam1, team2Id: selectedTeam2 }));
      setSelectedTeam1('');
      setSelectedTeam2('');
    }
  };

  return (
    <div className="add-match-form">
      <h3>Add a New Match</h3>
      <select
        value={selectedTeam1}
        onChange={(e) => setSelectedTeam1(e.target.value)}
      >
        <option value="">Select Team 1</option>
        {teams.map((team) => (
          <option key={team.id} value={team.id}>
            {team.name}
          </option>
        ))}
      </select>
      <select
        value={selectedTeam2}
        onChange={(e) => setSelectedTeam2(e.target.value)}
      >
        <option value="">Select Team 2</option>
        {teams.map((team) => (
          <option key={team.id} value={team.id}>
            {team.name}
          </option>
        ))}
      </select>
      <button className="add-match-btn" onClick={handleAddMatch}>Add Match</button>
    </div>
  );
};

export default AddMatchForm;
