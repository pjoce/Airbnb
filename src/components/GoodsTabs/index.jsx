import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { GoodsTabsWrapper } from './style';
import classNames from 'classnames';
import ScrollView from '../ScrollView';

const GoodsTabs = memo((props) => {
  const { tabs = [], tabClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  function tabItemClick(index, item) {
    setCurrentIndex(index);
    tabClick(item);
  }
  return (
    <GoodsTabsWrapper>
      <ScrollView>
        {
          tabs.map((item, index) => {
            return (
              <div
                key={index}
                className={classNames('tab_item', { 'active': index === currentIndex })}
                onClick={() => tabItemClick(index, item)}
              >
                {item}
              </div>
            );
          })
        }
      </ScrollView>
    </GoodsTabsWrapper>
  );
});
GoodsTabs.propTypes = {
  tabs: PropTypes.array,
  tabClick: PropTypes.func
};

export default GoodsTabs;
