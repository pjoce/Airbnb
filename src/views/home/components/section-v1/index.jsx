import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { SectionV1Wrapper } from './style';
import GoodsHeader from '@/components/GoodsHeader';
import GoodsList from '@/components/GoodsList';
import GoodsFooter from '@/components/GoodsFooter';

const SectionV1 = memo((props) => {
  const { infoData } = props
  return (
    <SectionV1Wrapper>
      <GoodsHeader title={infoData.title} subtitle={infoData.subtitle} />
      <GoodsList list={infoData.list} />
      <GoodsFooter />
    </SectionV1Wrapper>
  );
});
SectionV1.propTypes = {
  infoData: PropTypes.object
};

export default SectionV1;
