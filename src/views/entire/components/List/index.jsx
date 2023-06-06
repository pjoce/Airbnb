import React, { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { updateGoodsInfo } from '@/store/modules/detail';
import { ListWrapper } from './style';
import GoodsItem from '@/components/GoodsItem';

const List = memo(() => {
  const { isLoading, entireList, total } = useSelector(state => ({
    isLoading: state.entire.isLoading,
    entireList: state.entire.entireList,
    total: state.entire.total
  }), shallowEqual);
  const navitate = useNavigate()
  const dispatch = useDispatch()
  const seeGoodsInfo = useCallback(goodsInfo => {
    navitate('/detail');
    dispatch(updateGoodsInfo(goodsInfo));
  }, [navitate, dispatch]);
  return (
    <ListWrapper>
      <h2 className="title">{ total }多处住所</h2>
      <div className="entire_list">
        {
          entireList.map(item => {
            return (
              <GoodsItem
                key={item._id}
                itemWidth='20%'
                goodsData={item}
                seeGoodsInfo={seeGoodsInfo}
              />
            )
          })
        }
      </div>
      { isLoading && <div className="cover"></div> }
    </ListWrapper>
  );
});

export default List;
