import styled from 'styled-components';
import { size } from '../theme';

export const SBackground = styled.div`
  z-index: -1;
`;

export const SBackgroundGradient = styled.div`
  width: ${size.pageWidth};
  height: ${size.pageHeight};
  background: linear-gradient(
    43deg,
    rgba(254, 240, 255, 0.8) 0%,
    rgba(236, 236, 255, 0.8) 49%,
    rgba(228, 250, 255, 0.8) 100%
  );
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`

export const SImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`