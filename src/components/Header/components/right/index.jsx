import React, { memo, useState, useEffect } from 'react';
import { RightWrapper } from './style';
import GlobalSVG from '@/assets/svg/GlobalSVG';
import MenuSVG from '@/assets/svg/MenuSVG';
import AvatarSVG from '@/assets/svg/AvatarSVG';

const Header = memo(() => {
  const [isShowPanel, setIsShowPanel] = useState(false);
  function setIsShowPanelClick() {
    setIsShowPanel(true);
  }
  useEffect(() => {
    function windowClickHandle() {
      setIsShowPanel(false);
    }
    window.addEventListener('click', windowClickHandle, true);
    return () => {
      window.removeEventListener('click', windowClickHandle, true);
    }
  }, []);
  return (
    <RightWrapper>
      <div className="operation">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <GlobalSVG />
        </span>
      </div>

      <div className="userinfo" onClick={setIsShowPanelClick}>
        <MenuSVG />
        <AvatarSVG />
        { isShowPanel && (
          <div className="panel">
            <div className="top">
              <div>注册</div>
              <div>登录</div>
            </div>
            <div className="bottom">
              <div>出租房源</div>
              <div>开展体验</div>
              <div>帮助</div>
            </div>
          </div>
        ) }
      </div>
    </RightWrapper>
  );
});

export default Header;
