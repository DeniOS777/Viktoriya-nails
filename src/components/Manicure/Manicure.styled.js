import styled from 'styled-components';

export const ManicureList = styled.ul`
  display: flex;
  row-gap: 16px;
  flex-direction: column;
  max-width: 450px;
  margin: 0 auto;

  & li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    border-radius: 4px;
    box-shadow: ${p => p.theme.shadow.price};
    border: 1px solid ${p => p.theme.colors.borderPriceItem};
  }

  & p {
    font-size: 14px;

    @media (min-width: 768px) {
      font-size: 16px;
    }
  }

  & span {
    padding-left: 56px;
    font-size: 14px;
    white-space: nowrap;

    @media (min-width: 768px) {
      padding-left: 64px;
      font-size: 16px;
    }
  }
`;
