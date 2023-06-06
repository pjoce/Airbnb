import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { SectionV3Wrapper } from './style';
import GoodsHeader from '@/components/GoodsHeader';
import ScrollView from '@/components/ScrollView';
import GoodsItem1 from '@/components/GoodsItem1';

const SectionV3 = memo((props) => {
  const { infoData } = props;
  return (
    <SectionV3Wrapper>
      <GoodsHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="goods_list">
        <ScrollView>
          {
            infoData.list.map(item => {
              return <GoodsItem1 key={item.city} goodsData={item} />
            })
          }
        </ScrollView>
      </div>
    </SectionV3Wrapper>
  );
});
SectionV3.propTypes = {
  infoData: PropTypes.object
}

export default SectionV3;
