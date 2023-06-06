import styled from 'styled-components';

export const HeaderWrapper = styled.section`
  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
  }
  .content {
    position: relative;
    z-index: 9;
    border-bottom: 1px solid #eee;
    border-bottom-color: ${props => props.theme.isAlpha ? 'rgba(238,238,238,0)' : 'rgba(238,238,238,1)'};
    background-color: ${props => props.theme.isAlpha ? 'rgba(255,255,255,0)' : 'rgba(255,255,255,1)'};
    transition: all 250ms ease;
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 80px;
    }
  }
  .cover {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,.3);
  }
`;
export const SearchAreaWrapper = styled.section`
  height: ${props => props.isSearch ? '100px' : '0'};
  transition: height 250ms ease;
`;
