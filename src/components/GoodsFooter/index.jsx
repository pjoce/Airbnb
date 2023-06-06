import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { GoodsFooterWrapper } from './style';
import ShowMoreSVG from '@/assets/svg/ShowMoreSVG';

const GoodsFooter = memo((props) => {
  const { name } = props;
  let showName = '显示全部';
  if(name) {
    showName = `显示更多${name}房源`;
  }
  const navigate = useNavigate();
  function seeMore() {
    navigate('/entire');
  }
  return (
    <GoodsFooterWrapper color={name ? '#00848A': '#000'}>
      <div className="info" onClick={seeMore}>
        <span className="text">{ showName }</span>
        <ShowMoreSVG />
      </div>
    </GoodsFooterWrapper>
  );
});
GoodsFooter.propTypes = {
  name: PropTypes.string
};

export default GoodsFooter;
