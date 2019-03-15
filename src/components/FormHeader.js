import React from 'react';

const Header = ({ subtitle }) => {
  return (
    <div className="formHead">
      <h1 className="formHeader">
        <span className="formTitle">Crypto Adventures</span>
      </h1>

      <h2 className="formSubHeader">
        <span className="formSubtitle">
          {subtitle}
        </span>
      </h2>
    </div>
  );
};

export default Header;