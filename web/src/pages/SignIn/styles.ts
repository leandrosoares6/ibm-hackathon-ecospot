import styled, { keyframes } from 'styled-components';

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

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
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

  animation: ${appearFromLeft} 1s;

  form {
    margin: 70px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      color: #000;
    }

    a {
      color: #17752c;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: #17752c;
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

/* background: url(${signInBackgroundImg}) no-repeat center; */
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
    text-align: left;

    h1 {
      padding-left: 36px;
      color: #000;
      font-size: 64px;
      font-weight: lighter;
    }
    > p {
      color: #000;
      padding: 24px 64px;
      font-size: 36px;
      margin-top: 24px;
    }
  }

  img {
    max-width: 700px;
  }
`;
