import styled from 'styled-components';

export const Link = styled.a`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  flex: 1 0 auto;
  font-size: ${p => (p.mobile ? '22px' : '16px')};
  color: inherit;
  transition: color 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  & > span {
    line-height: 1;
  }

  &:hover,
  :focus {
    color: ${p => p.theme.colors.phoneHover};
    text-decoration: underline;
  }

  @media (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: 32px;
    }
  }

  @media (min-width: 1230px) {
    font-size: 18px;
  }
`;
