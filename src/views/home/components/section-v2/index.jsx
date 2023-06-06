import React, { memo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { SectionV2Wrapper } from './style';
import GoodsHeader from '@/components/GoodsHeader';
import GoodsTabs from '@/components/GoodsTabs';
import GoodsList from '@/components/GoodsList';
import GoodsFooter from '@/components/GoodsFooter';

const SectionV2 = memo((props) => {
  const { infoData } = props;
  const tabs = infoData.dest_address?.map(item => item.name);
  const initialName = Object.keys(infoData.dest_list)[0];
  const [name, setName] = useState(initialName);
  const tabClick = useCallback(function (name) {
    setName(name);
  }, []);
  return (
    <SectionV2Wrapper>
      <GoodsHeader title={infoData.title} subtitle={infoData.subtitle} />
      <GoodsTabs tabs={tabs} tabClick={tabClick} />
      <GoodsList list={infoData.dest_list?.[name]} itemWidth="33.33333%" />
      <GoodsFooter name={name} />
    </SectionV2Wrapper>
  );
});
SectionV2.propTypes = {
  infoData: PropTypes.object
};

export default SectionV2;
