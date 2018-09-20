import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  const { branding } = props;
  return (
    // Can create nav tag by creating classes like nav.nav-expand-sm.navbar-dark etc -> hit tab
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
      </div>

      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
      </ul>
    </nav>
  );
};

Header.defaultProps = {
  branding: 'My App'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};
export default Header;
