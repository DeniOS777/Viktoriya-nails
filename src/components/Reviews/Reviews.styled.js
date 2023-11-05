import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';

export const Section = styled.section`
  position: relative;
  padding-top: 80px;
  padding-bottom: 50px;
  max-width: 1440px;
  margin: 0 auto;
  background-color: ${p => p.theme.colors.backgroundSection};

  @media (min-width: 768px) {
    padding-top: 100px;
  }

  @media (min-width: 1230px) {
    padding-top: 120px;
  }
`;

export const Container = styled.div`
  max-width: 1230px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  margin-bottom: 48px;
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

export const SwiperSlideCustom = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 48px;
  width: 400px;
  height: 470px;
  background-color: ${p => p.theme.colors.reviewCard};
  border-radius: 24px;
  overflow: hidden;
`;
