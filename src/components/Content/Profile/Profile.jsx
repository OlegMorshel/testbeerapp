import React from "react";

import "./../../../scss/styles/Profile.scss";
import "./../../../scss/media/ProfileMedia.scss";

const Profile = (props) => {
  return (
    <div className="profile">
      <div className="profile__wrapper container">
        <div className="profile__section">
          <div className="profile__avatar">
            <img className="profile__photo" alt="avatar" src={props.avatar} />
          </div>
          <div className="profile__avatardata">
            <ul className="profile__list">
              <li className="profile__avatar-item">{props.first_name}</li>
              <li className="profile__avatar-item">{props.last_name}</li>
            </ul>
          </div>
        </div>
        <div className="profile__section">
          <ul className="profile__profiledata">
            <li className="profile__profiledata-item">{props.username}</li>
            <li className="profile__profiledata-item">
              <span>Date of birthday:</span> {props.date_of_birthday}
            </li>
            <li className="profile__profiledata-item">
              {`${props.country}, ${props.state}, ${props.city}`}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
