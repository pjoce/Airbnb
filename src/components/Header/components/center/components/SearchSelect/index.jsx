import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { SearchSectionsWrapper } from './style';

const SearchSections = memo((props) => {
  const { sections } = props;
  return (
    <SearchSectionsWrapper>
      {
        sections.map((item, index) => {
          return (
            <div key={index} className="item">
              <div className="info">
                <div className="title">{ item.title }</div>
                <div className="desc">{ item.desc }</div>
              </div>
              { index !== sections.length -1 && <div className="divider"></div> }
            </div>
          )
        })
      }
    </SearchSectionsWrapper>
  );
});
SearchSections.propTypes = {
  sections: PropTypes.array
};

export default SearchSections;
