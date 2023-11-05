import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-bottom: 32px;
`;

export const WrapOutline = styled.div`
  display: flex;
  column-gap: 4px;

  & > svg {
    color: #f5f5f5;
  }
`;

export const WrapColor = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  column-gap: 4px;
  height: 100%;
  width: ${p => (p.rating / 5) * 100}%;
  overflow: hidden;

  & > svg {
    flex-shrink: 0;
    color: #ffff00;
  }
`;
