import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <span className="brand-logo">{branding}</span>
      </div>
    </nav>
  );
};
Header.defaultProps = {
  branding: "My App"
};
Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
