import styled, { css } from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  color: #fff;
  background: #121214;
  width: 100%;

  @media (max-width: 768px) {
    background-image: none;
  }
`;
