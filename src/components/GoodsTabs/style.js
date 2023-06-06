import styled from 'styled-components';

export const GoodsTabsWrapper = styled.section`
  .tab_item {
    box-sizing: border-box;
    margin-right: 16px;
    flex-basis: 120px;
    flex-shrink: 0;
    border: 0.5px solid #d8d8d8;
    border-radius: 3px;
    padding: 14px 16px;
    font-size: 17px;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow};
    &:last-child {
      margin-right: 0;
    }
    &.active {
      background-color: ${props => props.theme.color.secondaryColor};
      color: #fff;
    }
  }
`;
