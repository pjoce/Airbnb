import React, { memo, useEffect, useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { PictureBrowserWrapper } from './style';
import CloseSVG from '@/assets/svg/CloseSVG';
import ArrowLeft from '@/assets/svg/ArrowLeftSVG';
import ArrowRight from '@/assets/svg/ArrowRightSVG';
import TriangleTop from '@/assets/svg/TriangleTop';
import TriangleBottom from '@/assets/svg/TriangleBottom';
import Indicator from '../Indicator';

const PictureBrowser = memo(props => {
  const { pictureUrls = [], close } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNext, setIsNext] = useState(true);
  const [showList, setShowList] = useState(true);
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, []);
  function closeClick() {
    document.body.style.overflow = 'auto';
    if(close) close();
  }
  function controlClick(isNext = true) {
    let index = isNext ? currentIndex + 1 : currentIndex - 1;
    if(index < 0) index = pictureUrls.length - 1;
    if(index > pictureUrls.length - 1) index = 0;
    setCurrentIndex(index);
    setIsNext(isNext);
  }
  function indicatorItemClick(index) {
    setCurrentIndex(index);
    setIsNext(index > currentIndex);
  }
  return (
    <PictureBrowserWrapper isNext={isNext}>
      <div className="top">
        <span className="close" onClick={closeClick}>
          <CloseSVG />
        </span>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={() => controlClick(false)}>
            <ArrowLeft width="77" height="77" />
          </div>
          <div className="btn right" onClick={() => controlClick(true)}>
            <ArrowRight width="77" height="77" />
          </div>
        </div>
        <div className="container">
          <SwitchTransition mode='in-out'>
            <CSSTransition key={pictureUrls[currentIndex]} classNames="fade" timeout={150}>
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>{currentIndex + 1}/{pictureUrls.length}:</span>
              <span> room Apartment图片{currentIndex + 1}</span>
              </div>
            <div className="toggle" onClick={() => setShowList(!showList)}>
              { showList ? '隐藏' : '显示' }照片列表
              { showList ? <TriangleBottom />: <TriangleTop /> }
            </div>
          </div>
          <div className="list" style={{height: showList ? '67px': '0'}}>
            <Indicator currentIndex={currentIndex}>
              {
                pictureUrls.map((item, index) => {
                  return (
                    <div key={item} className={classNames('item', {'active': index === currentIndex})} onClick={() => indicatorItemClick(index)}>
                      <img src={item} alt="" />
                    </div>
                  )
                })
              }
            </Indicator>
          </div>
        </div>
      </div>
    </PictureBrowserWrapper>
  );
});
PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array
};

export default PictureBrowser;
