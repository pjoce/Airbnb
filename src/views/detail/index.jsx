import React, { memo, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { updateHeaderConfig } from '@/store/modules/main';
import { DetailWrapper } from './style';
import Pictures from './components/Pictures';

const Detail = memo(() => {
  const { goodsInfo } = useSelector(state => ({
    goodsInfo: state.detail.goodsInfo
  }), shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateHeaderConfig({
      isFixed: false,
      topAlpha: false
    }));
  }, [dispatch]);
  return (
    <DetailWrapper>
      <Pictures pictureUrls={goodsInfo.picture_urls} />
    </DetailWrapper>
  );
});

export default Detail;
