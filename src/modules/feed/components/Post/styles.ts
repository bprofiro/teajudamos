import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  background: #e5e8ea;
  border-radius: 8px;

  padding: 16px 24px;

  header {
    display: flex;
    align-items: center;
    gap: 12px;

    strong {
      font-weight: normal;
      font-size: 20px;
      line-height: 24px;

      color: #000d0d;
    }

    span {
      font-size: 14px;
      line-height: 18px;

      color: #000d0d;

      opacity: 0.7;
    }
  }

  main {
    display: flex;
    justify-content: flex-start;

    p {
      font-size: 18px;
      line-height: 22px;
      color: #000d0d;

      opacity: 0.9;
    }
  }

  hr {
    width: 100%;
    border-top: 1px solid #00182c;
    opacity: 0.15;

    margin: 19px 0 8px;
  }

  footer {
    display: flex;
    align-items: center;
    gap: 16px;

    button {
      border: none;
      background: transparent;
      font-size: 18px;
      line-height: 24px;

      color: #000d0d;

      display: flex;
      align-items: center;
      gap: 8px;

      svg {
        margin-top: -6px;
      }

      &:hover {
        filter: brightness(5);
      }
    }
  }
`;
