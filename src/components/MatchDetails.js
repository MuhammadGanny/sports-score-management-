// components/MatchDetails.js
import React, { useState } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { updateScore } from '../redux/matchesSlice';
import { getTeamById } from '../redux/teamsSlice'; // Import the selector

const MatchDetails = ({ match }) => {
  const dispatch = useDispatch();
  const [score1, setScore1] = useState(match.score1);
  const [score2, setScore2] = useState(match.score2);

  const team1 = getTeamById(useSelector((state) => state.teams), match.team1Id);
  const team2 = getTeamById(useSelector((state) => state.teams), match.team2Id);

  const handleScoreChange = () => {
    dispatch(updateScore({ id: match.id, score1, score2 }));
  };

  return (
    <div className="match-details">
      <p>
      {team1?.name} vs {team2?.name}
        <input
          type="number"
          value={score1}
          onChange={(e) => setScore1(e.target.value)}
        />
        <input
          type="number"
          value={score2}
          onChange={(e) => setScore2(e.target.value)}
        />
        {/* <button className="btn btn-primary" onClick={handleScoreChange}>
          Update Score
        </button> */}
      </p>
      <p>Score: {score1} - {score2}</p> {/* Display the scores */}
    </div>
  );
};

export default MatchDetails;
