import styled from 'styled-components'
import { size } from './theme';

export const SHeroPage = styled.div`
  padding: 80px;
  height: ${size.pageHeight};
  /* background: linear-gradient(
    43deg,
    rgba(253, 224, 255, 1) 0%,
    rgba(217, 217, 255, 1) 49%,
    rgba(234, 251, 255, 1) 100%
  ); */
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  overflow: hidden;
`;
