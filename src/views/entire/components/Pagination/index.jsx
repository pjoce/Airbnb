import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination as AntPagination } from 'antd';
import { PaginationWrapper } from './style';
import { fetchEntireData } from '@/store/modules/entire';

const Pagination = memo(() => {
  const { currentPage, total } = useSelector(state => ({
    currentPage: state.entire.currentPage,
    total: state.entire.total
  }));
  const start = (currentPage - 1) * 20 + 1;
  const end = currentPage * 20;
  const dispatch = useDispatch();
  function currentChange(page) {
    window.scrollTo(0, 0);
    dispatch(fetchEntireData(page));
  }
  return (
    <PaginationWrapper>
      <div className="pagination">
        <AntPagination current={currentPage} onChange={currentChange} pageSize={20} showSizeChanger={false} total={total} />
        <div className="pagination_info">
          第 {start} - {end} 个房源, 共超过 {total} 个
        </div>
      </div>
    </PaginationWrapper>
  );
});

export default Pagination;
