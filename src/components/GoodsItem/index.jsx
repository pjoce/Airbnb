import React, { memo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { GoodsItemWrapper } from './style';
import { Rate, Carousel } from 'antd';
import ArrowLeft from '@/assets/svg/ArrowLeftSVG';
import ArrowRight from '@/assets/svg/ArrowRightSVG';
import Indicator from '../Indicator';

const GoodsItem = memo((props) => {
  const { goodsData, itemWidth = '25%', seeGoodsInfo } = props;
  const CarouselRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  function controlClick(e, isNext = true) {
    if(isNext) CarouselRef.current.next();
    else CarouselRef.current.prev();
    let newCurrnetIndex = isNext ? currentIndex + 1 : currentIndex - 1;
    if(newCurrnetIndex < 0) newCurrnetIndex = goodsData.picture_urls.length - 1;
    if(newCurrnetIndex > goodsData.picture_urls.length - 1) newCurrnetIndex = 0;
    setCurrentIndex(newCurrnetIndex);
    e.stopPropagation();
  }
  function goodsItemClick() {
    if (seeGoodsInfo) seeGoodsInfo(goodsData);
  }
  return (
    <GoodsItemWrapper verifyColor={goodsData?.verify_info?.text_color || '#39576a'} itemWidth={itemWidth} onClick={goodsItemClick}>
      <div className="inner">
        {
          !goodsData.picture_urls ? (
            <div className="cover">
              <img src={goodsData.picture_url} alt="" />
            </div>
          ) : (
            <div className="slider">
              <div className="control">
                <div className="btn left" onClick={e => controlClick(e, false)}>
                  <ArrowLeft width="24" height="24" />
                </div>
                <div className="btn right" onClick={e => controlClick(e, true)}>
                  <ArrowRight width="24" height="24"/>
                </div>
              </div>
              <div className="indicator">
                <Indicator currentIndex={currentIndex}>
                  {
                    goodsData.picture_urls.map((item, index) => {
                      return (
                        <div className="item" key={item}>
                          <span className={classNames('dot', {'active': currentIndex === index})}></span>
                        </div>
                      )
                    })
                  }
                </Indicator>
              </div>
              <Carousel ref={CarouselRef} dots={false}>
                {
                  goodsData.picture_urls.map((item, index) => {
                    return (
                      <div key={index} className="cover">
                        <img src={item} alt="" />
                      </div>
                    )
                  })
                }
              </Carousel>
            </div>
          )
        }
        <div className="desc">{ goodsData.verify_info.messages.join(' · ') }</div>
        <div className="name">{ goodsData.name }</div>
        <div className="price">¥{ goodsData.price }/晚</div>
        <div className="bottom">
          <Rate 
            value={goodsData.star_rating ?? 5}
            allowHalf
            disabled
            style={{fontSize: '12px', color: '#00848A'}}
          />
          <span className="count">{ goodsData.reviews_count }</span>
          {
            goodsData.bottom_info && <span className="extra">·{ goodsData.bottom_info?.content }</span>
          }
        </div>
      </div>
    </GoodsItemWrapper>
  );
});
GoodsItem.propTypes = {
  goodsData: PropTypes.object,
  itemWidth: PropTypes.string
};

export default GoodsItem;
