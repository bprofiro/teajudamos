import styled from 'styled-components';

export const Container = styled.section`
  background: #ffffff;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 16px;

  gap: 20px;

  strong {
    font-weight: 500;
    font-size: 22px;
    line-height: 24px;
    text-align: center;

    color: #000d0d;
  }

  span {
    font-size: 18px;
    line-height: 28px;
    text-align: center;

    color: #000d0d;
  }

  button {
    margin-top: 5px;
    width: 100%;
    height: 48px;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    color: #ffffff;

    border: none;
    background: #0054bc;
    border-radius: 5px;

    padding: 10px 14px;

    &:hover {
      filter: brightness(0.7);
    }
  }
`;
