import styled from 'styled-components';

export const GoodsItem1Wrapper = styled.section`
  flex-shrink: 0;
  width: 20%;
  .inner {
    padding: 8px;
    .goods_info {
      position: relative;
      border-radius: 3px;
      overflow: hidden;
      .cover {
        width: 100%;
      }
      .bg-cover {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 60%;
        background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%)
      }
      .info {
        position: absolute;
        bottom: 0;
        left: 8px;
        right: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 24px 32px;
        color: #fff;
        .city {
          font-size: 18px;
          font-weight: 600;
        }
        .price {
          margin-top: 5px;
          font-size: 14px;
        }
      }
    }
  }
`;
