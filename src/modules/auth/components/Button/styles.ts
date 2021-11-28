import styled from 'styled-components';

export const Container = styled.button`
  padding: 4px 8px;
  border-radius: 8px;
  background-color: #0054bc;
  border: none;
  text-transform: uppercase;
  font-weight: bold;
  color: #ffff;

  width: 100%;
  max-width: 450px;
  height: 48px;
  margin-top: 24px;

  &:hover {
    filter: brightness(0.7);
  }
`;
