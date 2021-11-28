import styled, { css } from 'styled-components';

type LinkProps = {
  variant: 'soft' | 'solid';
  color: string;
  backgroundColor?: string;
};

export const Container = styled.header`
  width: 100%;
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

  nav {
    display: flex;
    align-items: center;
    gap: 16px;
  }
`;

export const LinkContainer = styled.a<LinkProps>`
  padding: 14px 40px;
  border-radius: 8px;
  font-size: 18px;
  line-height: 20px;

  ${({ variant, color, backgroundColor }) => {
    if (variant === 'soft') {
      return css`
        background-color: transparent;
        border: 1px solid ${color};
        color: ${color};

        transition: background 0.5s;

        opacity: 0.8;

        &:hover {
          background: #48a6ff;
        }
      `;
    }

    if (variant === 'solid') {
      return css`
        background-color: ${backgroundColor};
        color: ${color};
        font-weight: 500;
        border: none;

        &:hover {
          filter: brightness(0.9);
        }
      `;
    }
  }}
`;
