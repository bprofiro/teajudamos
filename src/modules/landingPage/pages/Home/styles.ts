import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  hr {
    width: 100%;
    border-top: 1px solid #00182c;
    opacity: 0.15;

    margin: 25px 0;
  }
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 160px;

  div {
    display: flex;
    flex-direction: column;
  }

  h3 {
    max-width: 450px;
    font-weight: 600;
    font-size: 30px;
    line-height: 35px;
    margin-bottom: 20px;

    color: #00182c;
  }

  p {
    max-width: 450px;
    font-size: 20px;
    line-height: 28px;
    color: #00182c;

    opacity: 0.8;
  }

  a {
    width: fit-content;
    padding: 14px 20px;
    border-radius: 8px;
    font-size: 18px;
    line-height: 20px;
    background-color: #0054bc;
    color: #ffffff;
    font-weight: 500;
    border: none;
    margin-top: 25px;

    &:hover {
      filter: brightness(0.7);
    }
  }

  &:first-child {
    margin-top: 26px;
  }
`;
