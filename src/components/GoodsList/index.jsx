import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { GoodsListWrapper } from './style';
import GoodsItem from '../GoodsItem';

const GoodsList = memo((props) => {
  const { list = [], itemWidth } = props;
  return (
    <GoodsListWrapper>
      {
        list.slice(0, 8)?.map(item => {
          return <GoodsItem goodsData={item} key={item.id} itemWidth={itemWidth} />;
        })
      }
    </GoodsListWrapper>
  );
});
GoodsList.propTypes = {
  list: PropTypes.array,
  itemWidth: PropTypes.string
};

export default GoodsList;
