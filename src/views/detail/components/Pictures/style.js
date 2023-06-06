import styled from 'styled-components';

export const PicturesWrapper = styled.section`
  position: relative;
  > .top {
    display: flex;
    height: 600px;
    background-color: #000;
    &:hover {
      .cover {
        opacity: 1 !important;
      }
      .item:hover {
        .cover {
          opacity: 0 !important;
        }
      }
    }
    /* .cover {
      opacity: 1 !important;
    }
    .item:hover {
      .cover {
        opacity: 0 !important;
      }
    } */
    .left, .right {
      width: 50%;
      height: 100%;
      .item {
        position: relative;
        height: 100%;
        overflow: hidden;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
          transition: transform 0.3s ease-in;
          object-fit: cover;
        }
        .cover {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: rgba(0,0,0,.2);
          opacity: 0;
          transition: opacity 200ms ease;
        }
        &:hover {
          img {
            transform: scale(1.1);
          }
        }
      }
    }
    .right {
      display: flex;
      flex-wrap: wrap;
      .item {
        box-sizing: border-box;
        width: 50%;
        height: 50%;
        border: 1px solid #000;
      }
    }
  }
  .see_pictures {
    position: absolute;
    bottom: 15px;
    right: 15px;
    z-index: 99;
    border-radius: 4px;
    background-color: #fff;
    padding: 6px 15px;
    line-height: 22px;
    cursor: pointer;
  }
`;
