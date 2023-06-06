import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SearchTabsWrapper } from './style';

const SearchTabs = memo((props) => {
  const { tabs, tabClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  function tabItemClick(index) {
    setCurrentIndex(index);
    if(tabClick) tabClick(index);
  }
  return (
    <SearchTabsWrapper>
      {
        tabs.map((item, index) => {
          return (
            <div
              key={item}
              className={classNames('item', { 'active': currentIndex === index })}
              onClick={e => tabItemClick(index)}
            >
              <span className="text">{ item }</span>
              <span className="bottom"></span>
            </div>
          )
        })
      }
    </SearchTabsWrapper>
  );
});
SearchTabs.propTypes = {
  tabs: PropTypes.array
};

export default SearchTabs;
