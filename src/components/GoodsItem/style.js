import styled from 'styled-components';

export const GoodsItemWrapper = styled.section`
  box-sizing: border-box;
  flex-shrink: 0;
  width: ${props => props.itemWidth};
  padding: 8px;
  .inner {
    width: 100%;
    .cover {
      box-sizing: border-box;
      position: relative;
      border-radius: 3px;
      padding: 66.66% 8px 0;
      overflow: hidden;
      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .slider {
      position: relative;
      cursor: pointer;
      &:hover {
        .control {
          display: flex;
        }
      }
      .control {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        display: none;
        justify-content: space-between;
        align-items: flex-start;
        color: #fff;
        .btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 83px;
          height: 100%;
          background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
          &.right {
            background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
          }
        }
      }
      .indicator {
        position: absolute;
        bottom: 10px;
        left: 0;
        right: 0;
        z-index: 9;
        margin: 0 auto;
        width: 30%;
        .item {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 20%;
          .dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: #fff;
            &.active {
              width: 8px;
              height: 8px;
            }
          }
        }
      }
    }
    .desc {
      margin: 10px 0 5px;
      font-size: 12px;
      color: ${props => props.verifyColor};
      font-weight: 700;
    }
    .name {
      font-size: 16px;
      font-weight: 700;
      overflow: hidden;  
      text-overflow: ellipsis; 
      display: -webkit-box; 
      -webkit-line-clamp: 2; 
      -webkit-box-orient: vertical;
    }
    .price {
      margin: 8px 0;
    }
    .bottom {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 12px;
      color: ${props => props.theme.text.primaryColor};
      font-weight: 600;
      .ant-rate-star {
        margin-right: 1px;
      }
      .count {
        margin: 0 2px 0 4px;
      }
    }
  }
`;
