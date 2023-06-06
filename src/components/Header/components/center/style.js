import styled from 'styled-components';

export const CenterWrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 48px;
  .search_bar {
    position: absolute;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 48px;
    border: 1px solid #ddd;
    border-radius: 24px;
    padding: 0 8px;
    cursor: pointer;
    will-change: transform, opacity;
    ${props => props.theme.mixin.boxShadow};
    .text {
      padding: 0 16px;
      color: #222;
      font-weight: 600;
    }
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: ${props => props.theme.color.primaryColor};
      color: #fff;
    }
  }
  .search_detail {
    position: relative;
    transform-origin: 50% 0;
    will-change: transform, opacity;
    .infos {
      position: absolute;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .detail-exit {
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }
  .detail-exit-active {
    transition: all 250ms ease;
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }
  .detail-enter {
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }
  .detail-enter-active {
    transform: scale(1.0) translateY(0);
    transition: all 250ms ease;
    opacity: 1;
  }
  .bar-enter {
    transform: scale(2.85714, 1.375) translateY(58px);
    opacity: 0;
  }
  .bar-enter-active {
    transition: all 250ms ease;
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }
  .bar-exit {
    opacity: 0;
  }
`;
