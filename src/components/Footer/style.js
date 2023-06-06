import styled from 'styled-components';

export const FooterWrapper = styled.section`
  margin-top: 100px;
  border-top: 1px solid #ebebeb;
  .wrapper {
    box-sizing: border-box;
    margin: 0 auto;
    padding: 48px 24px;
    width: 1080px;
  }
  .service {
    display: flex;
    .item {
      flex: 1;
      .name {
        margin-bottom: 16px;
        font-weight: 700;
      }
      .list {
        .iten {
          margin-top: 6px;
          color: #767676;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
  .statement {
    margin-top: 30px;
    padding: 20px;
    border-top: 1px solid #EBEBEB;
    color: #767676;
    text-align: center;
  }
`;
