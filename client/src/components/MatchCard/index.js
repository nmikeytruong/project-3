import React from "react";
import "./style.css";

function MatchCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.username} src={props.imageurl} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Username:</strong> {props.username}
          </li>
          <li>
            <strong>Gender:</strong> {props.gender}
          </li>
          <li>
            <strong>Looking For:</strong> {props.lookingFor}
          </li>
          <li>
            <strong>Interests:</strong> {props.interests}
          </li>
          <li>
            <strong>About Me:</strong> {props.aboutMe}
          </li>
        </ul>
      </div>
      <span onClick={() => props.matchProfile(props._id)} className="match">
        ☻
      </span>
    </div>
  );
}

export default MatchCard;
