import React, { memo, useEffect } from 'react';
import { HomeWrapper } from './style';
import Banner from './components/banner/indfex';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { updateHeaderConfig } from '@/store/modules/main';
import { fetchHomeData } from '@/store/modules/home';
import { isEmptyObj } from 'utils/isEmptyObj';
import SectionV1 from './components/section-v1';
import SectionV2 from './components/section-v2';
import SectionV3 from './components/section-v3';
import SectionV4 from './components/section-v4';

const App = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeData());
    dispatch(updateHeaderConfig({
      isFixed: true,
      topAlpha: true
    }));
  }, [dispatch]);
  const { discountInfo, recommenddestInfo, goodPriceInfo, highScoreInfo, longforInfo, plusInfo } = useSelector(state => ({
    discountInfo: state.home.discountInfo,
    recommenddestInfo: state.home.recommenddestInfo,
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo
  }), shallowEqual);
  return (
    <HomeWrapper>
      <Banner />
      <div className="content">
        <div className="goode_list">
          { isEmptyObj(discountInfo) && <SectionV2 infoData={discountInfo} /> }
          { isEmptyObj(recommenddestInfo) && <SectionV2 infoData={recommenddestInfo} /> }
          { isEmptyObj(goodPriceInfo) && <SectionV1 infoData={goodPriceInfo} /> }
          { isEmptyObj(goodPriceInfo) && <SectionV1 infoData={highScoreInfo} /> }
          { isEmptyObj(longforInfo) && <SectionV3 infoData={longforInfo} /> }
          { isEmptyObj(plusInfo) && <SectionV4 infoData={plusInfo} /> }
        </div>
      </div>
    </HomeWrapper>
  );
});

export default App;
