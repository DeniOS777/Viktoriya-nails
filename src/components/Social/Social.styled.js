import styled from 'styled-components';

export const Link = styled.a`
  display: flex;
  width: 40px;
  height: 40px;
  margin: 0 auto;
  margin-bottom: 24px;

  & > svg {
    display: inline-block;
    width: 40px;
    height: 40px;
    color: ${p => p.theme.colors.instagram};
    transition: color 300ms cubic-bezier(0.645, 0.045, 0.355, 1),
      transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  &:hover svg,
  :focus svg {
    transform: scale(1.1);
    color: ${p => p.theme.colors.instagramHover};
  }
`;
