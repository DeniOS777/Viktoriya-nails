import styled from 'styled-components';
import portfolio_bg from '../../images/portfolio_bg.png';

export const Section = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;
  max-width: 1440px;
  margin: 0 auto;
  background-color: ${p => p.theme.colors.backgroundSection};
  background-image: url(${portfolio_bg});
  background-size: 1400px 945px;
  background-repeat: no-repeat;
  background-position: center center;

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
  max-width: 1230px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  margin-bottom: 8px;
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
  margin-bottom: 32px;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.02em;
  text-align: center;

  @media (min-width: 768px) {
    margin-bottom: 48px;
  }
`;

export const Gallery = styled.ul`
  position: relative;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

  & li {
    border-radius: 8px;
    background-color: #ececec;
    transition: transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1),
      box-shadow 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
    overflow: hidden;
  }

  & li:hover,
  :focus {
    transform: translateY(-4px);
    box-shadow: ${p => p.theme.shadow.card};
  }
`;
