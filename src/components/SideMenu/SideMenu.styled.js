import styled from 'styled-components';

export const NavMenu = styled.div`
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  padding-top: 96px;
  padding-bottom: 96px;
  max-width: 768px;
  width: 100%;
  height: 100vh;
  text-align: center;
  background-color: ${p => p.theme.colors.sideMenuBackground};
  opacity: 0;
  visibility: hidden;
  transform: translateX(-100%);
  transition: transform 500ms cubic-bezier(0.645, 0.045, 0.355, 1),
    opacity 500ms cubic-bezier(0.645, 0.045, 0.355, 1),
    visibility 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
  overflow-y: auto;
  overscroll-behavior-y: contain;

  &.activMenu {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
  }
`;
