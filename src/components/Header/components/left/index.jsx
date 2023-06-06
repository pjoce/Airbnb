import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { LeftWrapper } from './style';
import LogoSVG from 'assets/svg/LogoSVG'

const Header = memo(() => {
  const navigate = useNavigate();
  function logoClick() {
    navigate('/home');
  }
  return (
    <LeftWrapper>
      <div className="logo" onClick={logoClick}>
        <LogoSVG />
      </div>
    </LeftWrapper>
  );
});

export default Header;
