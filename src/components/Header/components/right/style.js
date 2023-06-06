import styled from 'styled-components';

export const RightWrapper = styled.section`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${props => props.theme.isAlpha ? '#fff': '#484848'};
  font-weight: 600;
  .operation {
    box-sizing: content-box;
    display: flex;
    .btn {
      box-sizing: content-box;
      border-radius: 22px;
      padding: 12px 15px;
      height: 18px;
      line-height: 18px;
      cursor: pointer;
      &:hover {
        background-color: ${props => props.theme.isAlpha ? 'rgba(255,255,255,.1)': '#f5f5f5'};
      }
    }
  }
  .userinfo {
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-right: 24px;
    width: 77px;
    height: 42px;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    color: ${props => props.theme.text.primaryColor};
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow};
    .panel {
      position: absolute;
      top: 54px;
      right: 0;
      width: 240px;
      border-radius: 10px;
      box-shadow: 0 0 6px rgba(0,0,0,.2);
      background-color: #fff;
      color: #666;
      .top, .bottom {
        padding: 10px 0;
        div {
          padding: 0 16px;
          height: 40px;
          line-height: 40px;
          &:hover {
            background-color: #f5f5f5;
          }
        }
      }
      .top {
        border-bottom: 1px solid #ddd;
      }
    }
  }
`;
