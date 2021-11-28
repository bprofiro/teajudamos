import styled, { css } from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;

  main {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    background-image: none;
  }
`;
