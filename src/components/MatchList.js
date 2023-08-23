// components/MatchList.js
import React from 'react';
import { useSelector } from 'react-redux';
import MatchDetails from './MatchDetails';

const MatchList = () => {
  const matches = useSelector((state) => state.matches);

  return (
    <div className="match-list">
      <h2>Match List</h2>
      {matches.map((match) => (
        <MatchDetails key={match.id} match={match} />
      ))}
    </div>
  );
};

export default MatchList;
