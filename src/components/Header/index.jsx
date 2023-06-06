import React, { memo, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { HeaderWrapper, SearchAreaWrapper } from './style';
import Left from './components/left';
import Center from './components/center';
import Right from './components/right';

const Header = memo(() => {
  const { headerConfig } = useSelector(state => ({
    headerConfig: state.main.headerConfig
  }));
  const { isFixed, topAlpha } = headerConfig;
  const [isSearch, setIsSearch] = useState(false);
  const { scrollY } = useScrollPosition();
  const prevY = useRef(0);
  if(!isSearch) prevY.current = scrollY;
  if(isSearch && Math.abs(prevY.current - scrollY) > 30) setIsSearch(false);
  const isAlpha = topAlpha && scrollY === 0;
  function searchBarClick() {
    setIsSearch(true);
  }
  return (
    <ThemeProvider theme={{isAlpha}}>
      <HeaderWrapper className={classNames({'fixed': isFixed})}>
        <div className="content">
          <div className="top">
            <Left />
            <Center isSearch={isAlpha || isSearch} searchBarClick={searchBarClick} />
            <Right />
          </div>
          <SearchAreaWrapper isSearch={isAlpha || isSearch} />
        </div>
        { isSearch && <div className="cover" onClick={() => setIsSearch(false)}></div> }
      </HeaderWrapper>
    </ThemeProvider>
  );
});

export default Header;
