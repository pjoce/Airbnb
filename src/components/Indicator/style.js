import styled from 'styled-components';

export const IndicatorWrapper = styled.section`
  overflow: hidden;
  .scroll {
    position: relative;
    display: flex;
    transition: transform 200ms ease;
    > * {
      flex-shrink: 0;
    }
  }
`;
