import React from "react";
import { Link } from "react-router-dom";

const BoredOrNeedHelp = () => {
  return (
    <div className="mb-6 boredorneedhelp">
      <Link to="/bored" className="btn btn-dark bored">
        <i className="text-info mr-1" />
        Bored
      </Link>
      <Link to="/needhelp" className="btn btn-danger needhelp">
        <i className="text-info mr-1" />
        Need Help
      </Link>
    </div>
  );
};

export default BoredOrNeedHelp;
