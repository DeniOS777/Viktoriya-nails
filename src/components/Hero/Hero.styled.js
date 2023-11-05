import styled, { keyframes } from 'styled-components';
import hero_bg from '../../images/hero_bg.png';

const fade = keyframes`
  from {
    transform: translateX(-150px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fade_bg = keyframes`
  from {
    transform: translateX(150px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
    background-image: url(${hero_bg});
  }
`;

export const Section = styled.section`
  position: relative;
  padding-top: 80px;
  padding-bottom: 50px;
  max-width: 1440px;
  margin: 0 auto;
  background-color: ${p => p.theme.colors.backgroundSection};

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url(${hero_bg});
    background-repeat: no-repeat;
    background-size: 525px 525px;
    background-position: clamp(100px, 40vw, 546px) center;
    animation: ${fade_bg} 3s cubic-bezier(0.3, 0.885, 0.32, 1) 1s backwards;

    @media (min-width: 768px) {
      background-size: 650px 650px;
    }
  }

  @media (min-width: 768px) {
    padding-top: 120px;
    padding-bottom: 80px;
    background-size: 650px 650px;
  }

  @media (min-width: 1230px) {
    padding-top: 150px;
    padding-bottom: 100px;
  }
`;

export const Container = styled.div`
  max-width: 1230px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 450px;
  animation: ${fade} 3s cubic-bezier(0.3, 0.885, 0.32, 1) 1s backwards;
`;

export const Title = styled.h1`
  margin-bottom: 16px;
  max-width: 310px;
  font-family: Playfair;
  font-size: 62px;
  line-height: 1.2;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-align: center;
  text-shadow: ${p => p.theme.shadow.title};

  & > span {
    color: #ff0390;
  }

  @media (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 72px;
  }
`;

export const Text = styled.p`
  margin-bottom: 32px;
  max-width: 400px;
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: 0.02em;
  text-align: center;
  text-shadow: ${p => p.theme.shadow.text};

  & span {
    display: block;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Name = styled.p`
  margin-bottom: 32px;
  max-width: 450px;
  font-family: Playfair;
  font-weight: 700;
  font-size: 42px;
  line-height: 1.2;
  text-align: center;
  text-shadow: ${p => p.theme.shadow.text};
  @media (min-width: 768px) {
    margin-bottom: 48px;
  }
`;

export const Link = styled.a`
  display: inline-flex;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 54px;
  padding-right: 54px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: 0.02em;
  color: white;
  background-color: ${p => p.theme.colors.linkToPrice};
  border-radius: 30px;
  transition: background-color 300ms cubic-bezier(0.645, 0.045, 0.355, 1),
    box-shadow 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover,
  :focus {
    background-color: ${p => p.theme.colors.linkToPriceHover};
    box-shadow: rgb(255, 3, 144) 0px 2px 20px 10px,
      rgba(0, 0, 0, 0) 5px 15px 20px 5px;
  }
`;
