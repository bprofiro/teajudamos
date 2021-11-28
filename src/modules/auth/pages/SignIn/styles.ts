import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  color: #00182c;

  form {
    width: 100%;
    max-width: 450px;

    h1 {
      margin-bottom: 16px;
      font-weight: 600;
      font-size: 30px;
      line-height: 35px;
    }

    p {
      margin-bottom: 20px;
      font-size: 20px;
      line-height: 28px;
      opacity: 0.8;
    }
  }
`;

export const CreateUserContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 24px;
  font-size: 18px;
  line-height: 20px;

  span {
    display: inline-flex;
    gap: 4px;
    opacity: 0.8;
  }

  a:hover {
    filter: brightness(0.7);
  }
`;
