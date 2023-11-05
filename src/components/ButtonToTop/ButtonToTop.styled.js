import styled from 'styled-components';

export const Button = styled.button`
  position: fixed;
  z-index: 30;
  right: 24px;
  bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 50px;
  height: 50px;
  color: inherit;
  background-color: ${p => p.theme.colors.btnToTop};
  border-style: none;
  border-radius: 50%;
  opacity: 0;
  cursor: pointer;
  transition: opacity 350ms cubic-bezier(0.645, 0.045, 0.355, 1),
    background-color 350ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover,
  :focus {
    background-color: ${p => p.theme.colors.btnToTopHover};
  }

  & svg {
    width: 22px;
    height: 22px;
  }

  &.activ {
    opacity: 1;
  }
`;
