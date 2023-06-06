import styled from 'styled-components';

export const SearchTabsWrapper = styled.section`
  display: flex;
  color: ${props => props.theme.isAlpha ? '#fff' : '#222'};
  .item {
    position: relative;
    margin: 10px 16px;
    width: 64px;
    height: 20px;
    font-size: 16px;
    cursor: pointer;
    &.active .bottom {
      position: absolute;
      top: 28px;
      left: 0;
      width: 64px;
      height: 2px;
      background-color: ${props => props.theme.isAlpha ? '#fff' : '#333'};
    }
  }
`;
