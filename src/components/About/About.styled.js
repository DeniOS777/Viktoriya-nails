import styled from 'styled-components';
import about_bg from '../../images/about_bg.png';

export const Section = styled.section`
  position: relative;
  padding-top: 50px;
  padding-bottom: 70px;
  max-width: 1440px;
  margin: 0 auto;
  background-color: ${p => p.theme.colors.backgroundSection};
  background-image: url(${about_bg});
  background-repeat: no-repeat;
  background-size: clamp(120px, 32%, 400px);
  background-position: bottom right;

  @media (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  @media (min-width: 1230px) {
    padding-top: 120px;
    padding-bottom: 120px;
  }
`;

export const Container = styled.div`
  min-width: 320px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;

  @media (min-width: 480px) {
    width: 480px;
  }

  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 1230px) {
    width: 1230px;
  }
`;

export const Wrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    column-gap: 32px;
    justify-content: center;
  }

  @media (min-width: 1230px) {
    column-gap: 64px;
  }
`;

export const ImageThumb = styled.div`
  margin: 0 auto;
  max-width: 395px;
  max-height: 350px;
  background-color: #ffffff;
  border-radius: 16px;
  border: 2px solid ${p => p.theme.colors.borderImage};
  overflow: hidden;

  & > img {
    aspect-ratio: 1/1;
    object-fit: cover;
    transition: transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  & > img:hover {
    transform: scale(1.3);
  }

  @media (max-width: 767px) {
    margin-bottom: 24px;
  }

  @media (min-width: 768px) {
    flex-basis: calc(100vw - 220px);
    margin: 0;
  }

  @media (min-width: 1230px) {
    max-width: 450px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 32px;
  font-family: Playfair;
  font-size: 32px;
  line-height: 1.2;
  letter-spacing: 0.02em;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 36px;
  }

  @media (min-width: 1230px) {
    font-size: 40px;
  }
`;

export const Text = styled.p`
  max-width: 450px;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.02em;

  @media (min-width: 768px) {
    font-size: 16px;
    flex-shrink: 2;
  }
`;
