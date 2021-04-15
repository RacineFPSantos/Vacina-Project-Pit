import React from 'react';

const Header = () => (
  <header className="d-flex-center">
    <div className="logo">
      <h1>#VacinaSIM</h1>
    </div>

    {/* For dev propors */}
    <div>
      <a href="/">
        <button type="button">Home</button>
      </a>
    </div>
  </header>
);

export default Header;
