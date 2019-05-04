import React from "react";
import { Link } from "react-router-dom";

const ProfileActions = () => {
  return (
    <div className="mb-4">
      <p className="laceedup-info">
        <strong>Fill out your profile and click</strong>
        <Link to="/bored-or-needhelp" className="btn btn-dark btn-laceedup">
          <i className="fas fa-angle-double-right text-info mr-1" />
          Get Laceed Up
        </Link>
        <strong>to start your lacee experience</strong>
      </p>
      <br />
      <Link to="/edit-profile" className="btn btn-light btn-action">
        <i className="fas fa-user-circle text-info mr-1" /> Edit Profile
      </Link>
      <Link to="/add-experience" className="btn btn-light btn-action">
        <i className="fab fa-black-tie text-info mr-1" />
        Add Experience
      </Link>
      <Link to="/add-education" className="btn btn-light btn-action">
        <i className="fas fa-graduation-cap text-info mr-1" />
        Add Education
      </Link>
    </div>
  );
};

export default ProfileActions;
