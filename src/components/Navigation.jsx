import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

export default function Navigation() {
  return (
    <>
      <h1>
        <Link to="/">Personal Notes</Link>
      </h1>
      <div className="navigation">
      <ul>
        <li>
          <Link to="/archives">
            Archive
          </Link>
        </li>
      </ul>
    </div>
    </>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func,
  name: PropTypes.string,
  authedUser: PropTypes.array,
};
