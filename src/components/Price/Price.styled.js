import styled from 'styled-components';
import manicure_bg from '../../images/manicure_bg.png';
import pedicure_bg from '../../images/pedicure_bg.png';

export const Section = styled.section`
  padding-top: 50px;
  padding-bottom: 70px;
  max-width: 1440px;
  margin: 0 auto;
  background-color: ${p => p.theme.colors.backgroundSection};
  background-image: url(${manicure_bg}), url(${pedicure_bg});
  background-repeat: no-repeat;
  background-size: clamp(200px, 37%, 500px), clamp(200px, 37%, 500px);
  background-position: left -30px top 50px, right -30px bottom -120px;

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

export const Title = styled.h3`
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
