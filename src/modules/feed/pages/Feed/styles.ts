import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 700px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem 0;
`;

export const PublicPostContainer = styled.section`
  width: 100%;
  padding: 16px 24px;
  background: #e5e8ea;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  span {
    font-size: 20px;
    line-height: 24px;

    color: #000d0d;
  }

  form {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 24px;

    button {
      margin: 0;
      height: 48px;
      font-weight: 500;
      font-size: 18px;
      line-height: 20px;
      color: #ffffff;

      opacity: 0.8;
      border: none;
      background: #0054bc;
      border-radius: 5px;

      padding: 10px 14px;

      &:hover {
        filter: brightness(0.7);
      }
    }
  }
`;
