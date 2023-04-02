import styled from 'styled-components';
import { colors } from '../theme';

export const SContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const STitleBorder = styled.div`
  width: 100%;
  border-bottom: 5px solid ${colors.orangeBright};
`;

interface MarginProps {
  marginLeft?: string;
}

export const STitle = styled.h3<MarginProps>`
  font-size: 28px;
  line-height: 50px;
  font-weight: 500;
  margin-left: ${({ marginLeft }) => marginLeft ?? '33px'};
  position: relative;
  width: fit-content;
  z-index: 1;
  color: #474747;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) skew(-15deg);
    background: white;
    width: 160%;
    height: 100%;
    z-index: -1;
  }
`;

interface BackgroundProps {
  background?: string;
}

export const SSkills = styled.div<BackgroundProps>`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px;
  border-radius: 0 0 16px 16px;
  background: ${({ background }) => background ?? 'none'};
`;

export const SList = styled.h3`
  display: flex;
  font-size: 26px;
  font-weight: 400;
  color: #3e3e3e;
  border-radius: 50px;
  border: 1px solid #d9d9d9;
  padding: 16px 30px;
  box-shadow: 0 0 8px 0 rgba(53, 53, 53, 0.2);
  background: rgba(255, 255, 255, 0.7);
`;
