import React, { memo, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { CenterWrapper } from './style';
import SearchBarSVG from '@/assets/svg/SearchBarSVG';
import SearchTabs from './components/SearchTabs';
import SearchSections from './components/SearchSelect';
import searchData from 'assets/data/searchData.json';

const Header = memo((props) => {
  const { isSearch, searchBarClick } = props;
  const tabs = searchData.map(item => item.title);
  const [currentTab, setCurrentTab] = useState(0);
  function tabClick(index) {
    setCurrentTab(index);
  }
  function searchBarClickHandle() {
    if(searchBarClick) searchBarClick();
  }
  return (
    <CenterWrapper>
      <CSSTransition
        in={!isSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search_bar" onClick={searchBarClickHandle}>
          <div className="text">
            搜索房源和体验
          </div>
          <div className="icon">
            <SearchBarSVG />
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={isSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search_detail">
          <SearchTabs tabs={tabs} tabClick={tabClick} />
          <div className="infos">
            <SearchSections sections={searchData[currentTab].searchInfos}/>
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  );
});

export default Header;
