import styled from 'styled-components';
import { colors } from '../theme';

export const SSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px;
  border-left: 8px solid ${colors.orangeBright};
  background: rgba(255, 255, 255, 0.7);
  border-radius: 16px;
  box-shadow: 0 0 8px 0 #ccc;
`;

export const STitle = styled.h3`
  font-size: 28px;
  font-weight: 500;
  color: #2d2d2d;
`;

export const SParagraph = styled.p`
  font-size: 28px;
  font-weight: 400;
  color: #2d2d2d;
`;
