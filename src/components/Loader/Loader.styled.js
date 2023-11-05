import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100dvh;
`;

export const Circle = styled.div`
  width: 65px;
  height: 65px;
  border: 10px solid white;
  border-top-color: #075bd7;
  border-right-color: #075bd7;
  border-left-color: #075bd7;
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`;
