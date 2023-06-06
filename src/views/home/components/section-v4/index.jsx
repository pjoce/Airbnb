import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { SectionV4Wrapper } from './style';
import GoodsHeader from '@/components/GoodsHeader';
import ScrollView from '@/components/ScrollView';
import GoodsItem from '@/components/GoodsItem';
import GoodsFooter from '@/components/GoodsFooter';

const SectionV4 = memo(props => {
  const { infoData } = props;
  return (
    <SectionV4Wrapper>
      <GoodsHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="goods_list">
        <ScrollView>
          {
            infoData.list.map(item => {
              return <GoodsItem key={item.id} itemWidth='20%' goodsData={item} />
            })
          }
        </ScrollView>
      </div>
      <GoodsFooter name='plus' />
    </SectionV4Wrapper>
  );
});
SectionV4.propTypes = {
  infoData: PropTypes.object
}

export default SectionV4;
