// components/MatchList.js
import React from 'react';
import { useSelector } from 'react-redux';
import MatchDetails from './MatchDetails';
import { getTeamById } from '../redux/teamsSlice';

const MatchList = () => {
  const matches = useSelector(state => state.matches);
  const teams = useSelector(state => state.teams);
 console.log(teams, matches)
  return (
    <div className="match-list">
      <h2>Match List</h2>
      {matches.map(match => (
        <div className="match-item" key={match.id}>
          <p>
            {getTeamById(teams, match.team1Id)?.name} vs{' '}
            {getTeamById(teams, match.team2Id)?.name}
          </p>
          <MatchDetails match={match} />
        </div>
      ))}
    </div>
  );
};

export default MatchList;





// // components/MatchList.js
// import React from 'react';
// import { useSelector } from 'react-redux';
// import MatchDetails from './MatchDetails';
// import { getTeamById } from '../redux/teamsSlice'; // Import the selector
// import UpdateTeamForm from './UpdateTeamForm'
// const MatchList = () => {
//   const matches = useSelector((state) => state.matches);
//   const teams = useSelector((state) => state.teams); // Get the teams from the state

//   return (
//     <div>
//       <h2>Match List</h2>
//       {matches.map((match) => (
//         <div key={match.id}>
//           <p>
//             {getTeamById(teams, match.team1Id)?.name} vs{' '}
//             {getTeamById(teams, match.team2Id)?.name}
//           </p>
//           <MatchDetails match={match} />
//           {/* <UpdateTeamForm team={getTeamById(teams, match.team1Id)} />
//           <UpdateTeamForm team={getTeamById(teams, match.team2Id)} /> */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MatchList;

