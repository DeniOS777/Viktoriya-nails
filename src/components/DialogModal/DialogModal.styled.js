import styled from 'styled-components';

export const Dialog = styled.dialog`
  padding: 0;
  padding-top: 20px;
  border-radius: 8px;
  border-style: none;

  & > button {
    position: absolute;
    right: 4px;
    top: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    width: 24px;
    height: 24px;
    line-height: 1;
    border-radius: 50%;
    border-style: none;
    background-color: transparent;
    cursor: pointer;
    transition: background-color 300ms ease-in-out;

    &:hover,
    :focus {
      background-color: lightgrey;
    }
  }

  &::backdrop {
    background: rgba(0, 0, 0, 0.6);
  }
`;
