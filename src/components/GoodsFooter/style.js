import styled from 'styled-components';

export const GoodsFooterWrapper = styled.section`
  margin-top: 10px;
  display: flex;
  .info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    font-size: 17px;
    color: ${props => props.color};
    font-weight: 700;
    &:hover {
      text-decoration: underline;
    }
    .text {
      margin-right: 6px;
    }
  }
`;
