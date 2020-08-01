import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.button`
  background: #17752C;
  box-shadow: 0px 4px 10px rgba(16, 156, 241, 0.24);
  height: 56px;
  border-radius: 4px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 60%;
  font-weight: 500;
  margin-top: 24px;
  transition: background-color 0.2s;

  &:hover {
    background: ${lighten(0.2, '#17752C')};
  }
`;
