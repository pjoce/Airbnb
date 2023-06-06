import React, { memo, useState } from 'react';
import { FilterWrapper } from './style';
import filterData from 'assets/data/filterData.json';
import classNames from 'classnames';

const Filter = memo(() => {
  const [selectItems, setSelectItems] = useState([]);
  function filterItemClick(item) {
    const newItems = [...selectItems];
    if(newItems.includes(item)) {
      const index = newItems.findIndex(newItem => item === newItem);
      newItems.splice(index, 1);
    }else {
      newItems.push(item);
    }
    setSelectItems(newItems);
  }
  return (
    <section>
      <FilterWrapper>
        <div className="filter_list">
          {
            filterData.map(item => {
              return (
                <div key={item} className={classNames('filter_item', {'active': selectItems.includes(item)})} onClick={() => filterItemClick(item)}>
                  { item }
                </div>
              )
            })
          }
        </div>
      </FilterWrapper>
    </section>
  );
});

export default Filter;
