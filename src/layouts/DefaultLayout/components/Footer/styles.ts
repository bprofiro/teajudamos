import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 80px;

  background: #48a6ff;

  > div {
    width: 100%;
    height: 100%;

    max-width: 1170px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    padding: 50px 0;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 16px;
  }
`;

export const Logo = styled.div``;

export const LinksSection = styled.section`
  display: flex;
  align-items: flex-start;

  gap: 120px;

  margin-top: 45px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;

    li {
      font-size: 20px;
      line-height: 30px;

      color: #00182c;

      a {
        color: #00182c;
      }
    }
  }
`;

export const ActionSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 100px;

  button {
    width: 48px;
    height: 48px;
    border: none;
    border-radius: 8px;

    background-color: #fff;

    &:hover {
      filter: brightness(0.7);
    }
  }
`;
