import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  main {
    position: relative;
    width: 100%;
    max-width: 1170px;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const Right = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Left = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > a {
    width: 48px;
    height: 48px;
    border: none;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #0054bc;

    transform: rotate(-90deg);

    position: absolute;
    top: 0;
    left: 0;

    margin-top: 35px;

    &:hover {
      filter: brightness(0.7);
    }
  }
`;
