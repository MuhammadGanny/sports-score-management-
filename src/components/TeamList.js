// components/TeamList.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTeam } from '../redux/teamsSlice';

const TeamList = () => {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams);

  const handleDeleteTeam = (teamId) => {
    dispatch(deleteTeam({ id: teamId }));
  };

  return (
    <div className="team-list">
      <h2>Team List</h2>
      <ul className="lists">
        {teams.map((team) => (
          <li className="lists" key={team.id}>
            {team.name}
            <button className="delete-button"  onClick={() => handleDeleteTeam(team.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamList;
