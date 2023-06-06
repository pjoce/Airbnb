import styled from 'styled-components';

export const SearchSectionsWrapper = styled.section`
  display: flex;
  width: 850px;
  height: 66px;
  border: 1px solid #ddd;
  border-radius: 32px;
  background-color: #fff;
  .item {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 32px;
    .info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 0 30px;
      .title {
        font-size: 12px;
        color: #222;
        font-weight: 800;
      }
      .desc {
        font-size: 14px;
        color: #666;
      }
    }
    .divider {
      width: 1px;
      height: 32px;
      background-color: #ddd;
    }
    &:hover {
      background-color: #eee;
    }
  }
`;
