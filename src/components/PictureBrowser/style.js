import styled from 'styled-components';

export const PictureBrowserWrapper = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  background-color: rgb(33,33,33);
  opacity: 1;
  .top {
    position: relative;
    height: 86px;
    .close {
      position: absolute;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }
  .slider {
    flex: 1;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .container {
      position: relative;
      max-width: 105vh !important;
      width: 100% !important;
      height: 100%;
      overflow: hidden;
      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
      }
    }
    .control {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      color: #fff;
      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        cursor: pointer;
      }
    }
    .fade-enter {
      transform: translate(${props => props.isNext ? "100%":"-100%"});
      opacity: 0;
    }
    .fade-enter-active {
      transform: translate(0);
      opacity: 1;
      transition: all 150ms ease;
    }
    .fade-exit {
      opacity: 1;
    }
    .fade-exit-active {
      transition: all 150ms ease;
      opacity: 0;
    }
  }
  .preview {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100px;
    .info {
      position: absolute;
      bottom: 10px;
      max-width: 105vh;
      color: #fff;
      .desc {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        .toggle {
          cursor: pointer;
        }
      }
      .list {
        margin-top: 3px;
        transition: height 300ms ease;
        overflow: hidden;
        .item {
          margin-right: 15px;
          cursor: pointer;
          img {
            height: 67px;
            opacity: 0.5;
          }
          &.active {
            img {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`;
