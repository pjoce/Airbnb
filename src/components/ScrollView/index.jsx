import React, { memo, useState, useEffect } from 'react';
import { useRef } from 'react';
import { ScrollViewWrapper } from './style';
import ArrowLeft from '@/assets/svg/ArrowLeftSVG';
import ArrowRight from '@/assets/svg/ArrowRightSVG';

const ScrollView = memo((props) => {
  const scrollContentRef = useRef();
  const [showArrowLeft, setShowArrowLeft] = useState(false);
  const [showArrowRight, setShowArrowRight] = useState(false);
  const totalDistanceRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth;
    const clientWidth = scrollContentRef.current.clientWidth;
    const totalDistance = scrollWidth - clientWidth;
    totalDistanceRef.current = totalDistance;
    setShowArrowRight(totalDistance > 0);
  }, [props.children]);
  function arrowClick(isRight) {
    const newCurrentIndex = isRight ? currentIndex + 1 : currentIndex - 1;
    const newEl = scrollContentRef.current.children[newCurrentIndex];
    const newOffsetLeft = newEl.offsetLeft;
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`;
    setCurrentIndex(newCurrentIndex);
    setShowArrowRight(totalDistanceRef.current > newOffsetLeft);
    setShowArrowLeft(newOffsetLeft > 0);
  }
  return (
    <ScrollViewWrapper>
      { showArrowLeft && (
        <div className="control arrow_left" onClick={() => arrowClick(false)}>
          <ArrowLeft />
        </div>
      ) }
      { showArrowRight && (
        <div className="control arrow_right" onClick={() => arrowClick(true)}>
          <ArrowRight />
        </div>
      )}
      <div className="scroll">
        <div ref={scrollContentRef} className="scroll_content">
          { props.children }
        </div>
      </div>
    </ScrollViewWrapper>
  );
});

export default ScrollView;
