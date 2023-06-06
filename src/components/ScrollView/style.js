import styled from 'styled-components';

export const ScrollViewWrapper = styled.section`
  position: relative;
  padding: 8px 0;
  .control {
    position: absolute;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-width: 2px;
    border-style: solid;
    border-color: #fff;
    border-radius: 50%;
    box-shadow: 0px 1px 1px 1px rgba(0,0,0,.14);
    background: #fff;
    text-align: center;
    cursor: pointer;
    &.arrow_left {
      top: 50%;
      left: 0;
      transform: translate(-50%, -50%);
    }
    &.arrow_right {
      top: 50%;
      right: 0;
      transform: translate(50%, -50%);
    }
  }
  .scroll {
    overflow: hidden;
    .scroll_content {
      display: flex;
      transition: transform 250ms ease;
    }
  }
`;
