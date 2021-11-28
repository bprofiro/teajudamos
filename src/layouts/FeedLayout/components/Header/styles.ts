import styled, { css } from 'styled-components';

type NavItemProps = {
  isActive: boolean;
};

export const Container = styled.header`
  width: 100%;
  max-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #48a6ff;

  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.2);

  > div {
    width: 100%;

    max-width: 1170px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 26px 0;
  }
`;

export const CenteredNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const NavItem = styled.a<NavItemProps>`
  display: inline-block;
  height: 100%;
  padding: 0 0.5rem;
  height: 100%;
  line-height: 6.5rem;
  position: relative;
  color: #00182c;

  ${({ isActive }) =>
    isActive &&
    css`
      font-weight: bold;

      &::after {
        content: '';
        height: 3px;
        border-radius: 3px 3px 0 0;
        width: 100%;
        position: absolute;
        bottom: 1px;
        left: 0;
        background: #00182c;
      }
    `}

  &:hover {
    filter: brightness(2.5);
  }
`;

export const Logout = styled.section`
  button {
    padding: 8px 12px;
    border-radius: 8px;
    font-size: 16px;
    line-height: 20px;

    background-color: transparent;
    border: 1px solid #00182c;
    color: #00182c;

    transition: background 0.5s;

    opacity: 0.8;

    &:hover {
      background: #48a6ff;
    }
  }
`;
