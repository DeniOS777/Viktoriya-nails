import styled from 'styled-components';

export const MenuButton = styled.button`
  position: relative;
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  row-gap: 8px;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border-style: none;
  cursor: pointer;

  & span {
    transition: transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1),
      opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  &.activ span:nth-child(1) {
    transform: rotate(45deg) translate(7px, 7px);
  }

  &.activ span:nth-child(2) {
    opacity: 0;
  }

  &.activ span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -7px);
  }
`;

export const Bar = styled.span`
  display: block;
  width: 40px;
  height: 2px;
  background-color: ${p => p.theme.colors.burger};
  border-radius: 25px;
`;
