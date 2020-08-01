import styled, { css } from 'styled-components';
import { lighten } from 'polished';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  containsError: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #DEF2DF;
  border-radius: 5px;
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: center;

  border: 2px solid #fff;
  color: #17752C;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.containsError === true &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused === true &&
    css`
      color: ${lighten(0.2, '#17752C')};
      border-color: ${lighten(0.2, '#17752C')};
    `}

  ${(props) =>
    props.isFilled === true &&
    css`
      color: ${lighten(0.2, '#17752C')};
    `}


  input {
    width: 180px;
    flex: 1;
    background: transparent;
    border: 0;
    color: rgba(0, 0, 0, 0.6);

    &::placeholder {
      color: rgba(0, 0, 0, 0.6);
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
