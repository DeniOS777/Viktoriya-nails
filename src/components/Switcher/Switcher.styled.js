import styled from 'styled-components';

export const ButtonGroup = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
  margin-bottom: 48px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  font-size: 14px;
  color: ${p => (p.activ ? '#ffffff' : 'rgb(0 0 0 / 0.25)')};
  border-style: none;
  background-color: ${p => (p.activ ? '#36b6e1' : '#ffffff')};
  border-radius: 4px;
  box-shadow: ${p =>
    p.activ
      ? '0px 10px 13px -7px #36b6e1, 5px 5px 15px 5px rgba(0, 0, 0, 0)'
      : 'none'};
  cursor: pointer;
  transform: ${p => (p.activ ? 'scale(1.2)' : 'none')};
  transition: background-color 300ms cubic-bezier(0.645, 0.045, 0.355, 1),
    color 300ms cubic-bezier(0.645, 0.045, 0.355, 1),
    box-shadow 300ms cubic-bezier(0.645, 0.045, 0.355, 1),
    transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover,
  :focus {
    background-color: ${p => (p.activ ? '#36b6e1 ' : '#f5f5f5 ')};
  }

  @media (min-width: 768px) {
    padding: 12px 24px;
    font-weight: 600;
    font-size: 16px;
  }
`;
