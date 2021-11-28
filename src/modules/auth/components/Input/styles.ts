import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  label {
    margin-bottom: 8px;
  }

  & + div {
    margin-top: 16px;
  }
`;

export const InputContainer = styled.div<ContainerProps>`
  width: 450px;
  height: 48px;
  padding: 16px;
  border-radius: 10px;
  width: 100%;
  border: 1px solid #000;
  color: #000d0d;
  display: flex;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #0054bc;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      border-color: #0054bc;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #000d0d;

    &::placeholder {
      font-size: 16px;
      line-height: 20px;
      color: #000d0d;
    }
  }

  & + div {
    margin-top: 8px;
  }
`;

export const Error = styled.span`
  margin-left: 16px;
  align-self: flex-start;
  font-size: 14px;
  color: #c53030;
`;
