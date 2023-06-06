import styled from 'styled-components';

export const ListWrapper = styled.section`
  position: relative;
  margin-top: 128px;
  padding: 30px 20px;
  .title {
    margin: 0 0 10px 10px;
    font-size: 22px;
    color: #222;
    font-weight: 700;
  }
  .entire_list {
    display: flex;
    flex-wrap: wrap;
  }
  .cover {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255,255,255, .8);
  }
`;
