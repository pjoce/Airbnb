import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { GoodsHeaderWrapper } from './style';

const GoodsHeader = memo((props) => {
  const { title, subtitle } = props;
  return (
    <GoodsHeaderWrapper>
      <h2 className="title">{ title }</h2>
      { subtitle && <div className="subtitle">{ subtitle }</div> }
    </GoodsHeaderWrapper>
  );
});
GoodsHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default GoodsHeader;
