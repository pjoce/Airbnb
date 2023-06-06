import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { GoodsItem1Wrapper } from './style';

const GoodsItem1 = memo(props => {
  const { goodsData } = props;
  return (
    <GoodsItem1Wrapper>
      <div className="inner">
        <div className="goods_info">
          <img className="cover" src={goodsData.picture_url} alt="" />
          <div className="bg-cover"></div>
          <div className="info">
            <div className="city">{goodsData.city}</div>
            <div className="price">均价 {goodsData.price}</div>
          </div>
        </div>
      </div>
    </GoodsItem1Wrapper>
  );
});
GoodsItem1.propTypes = {
  goodsData: PropTypes.object
}

export default GoodsItem1;
