import styled, { keyframes } from 'styled-components';

const fade = keyframes`
  from {
    transform: translateX(-50px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Header = styled.header`
  position: relative;
  padding-top: 8px;
  padding-bottom: 8px;
  max-width: 1440px;
  margin: 0 auto;
  background-color: ${p => p.theme.colors.headerBackground};
  box-shadow: ${p => p.theme.shadow.header};

  @media (min-width: 768px) {
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;

export const Container = styled.div`
  max-width: 1230px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    animation: ${fade} 3s cubic-bezier(0.3, 0.885, 0.32, 1);
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  row-gap: 8px;
  flex-direction: column;

  @media (min-width: 890px) {
    flex-direction: row;
    column-gap: 16px;
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  row-gap: 8px;
  width: 100%;

  @media (min-width: 890px) {
    column-gap: 16px;
  }
`;
