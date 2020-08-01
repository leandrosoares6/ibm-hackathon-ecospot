import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;

  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;
`;

const apperFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${apperFromRight} 1s;

  form {
    margin: 70px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      color: #000;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #17752c;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: #17752c;
    }
  }
`;

export const Background = styled.div`
  @media (max-width: 700px) {
    display: none;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #def2df no-repeat center;
  background-size: cover;

  div {
    display: flex;
    flex-direction: column;
    padding-top: 64px;
    text-align: center;

    h1 {
      color: #000;
      font-size: 36px;
    }
    > p {
      padding: 24px 64px;
      font-size: 18px;
      margin-top: 24px;
    }
  }

  #bg {
    max-width: 700px;
  }
`;
