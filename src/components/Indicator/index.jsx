import React, { memo, useRef, useEffect } from 'react';
import { IndicatorWrapper } from './style';

const Indicator = memo((props) => {
  const { currentIndex } = props;
  const IndicatorRef = useRef();
  useEffect(() => {
    const currentEl = IndicatorRef.current.children[currentIndex];
    const currentElWidth = currentEl.clientWidth;
    const currentElOffset = currentEl.offsetLeft;
    const indicatorElWidth = IndicatorRef.current.clientWidth;
    const indicatorElScroll = IndicatorRef.current.scrollWidth;
    let distance = currentElWidth * 0.5 + currentElOffset - indicatorElWidth * 0.5;
    if (distance < 0) distance = 0;
    if (distance > indicatorElScroll - indicatorElWidth) distance = indicatorElScroll - indicatorElWidth;
    IndicatorRef.current.style.transform = `translate(${-distance}px)`;
  }, [currentIndex]);
  return (
    <IndicatorWrapper>
      <div ref={IndicatorRef} className="scroll">
        { props.children }
      </div>
    </IndicatorWrapper>
  );
});

export default Indicator;
