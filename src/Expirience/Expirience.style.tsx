import styled from 'styled-components';
import { colors } from '../theme';

export const SContainer = styled.div`
  padding: 24px;
  border-left: 8px solid ${colors.orangeBright};
  background: rgba(255, 255, 255, 0.7);
  border-radius: 16px;
  margin-bottom: 20px;
  box-shadow: 0 0 8px 0 #ccc;
  margin-bottom: 30px;
`;

export const STitle = styled.h3`
  font-size: 28px;
  font-weight: 500;
  padding-bottom: 20px;
`;

export const STitleContainer = styled.div`
  padding-bottom: 15px;
`;

export const SPosition = styled.h3`
  font-size: 28px;
  font-weight: 500;

  & span {
    font-size: 26px;
    font-weight: 400;
    color: ${colors.pink};
  }
`;

interface PaddingProps {
  paddingTop?: string;
}

export const SText = styled.p<PaddingProps>`
  padding-top: ${({ paddingTop }) => paddingTop ?? 0};
  font-size: 28px;

  & span {
    font-weight: 500;
    color: ${colors.pink_e};
  }
`;

export const Sul = styled.ul`
  padding-left: 30px;
`;

export const SBullet = styled.p`
  font-size: 28px;
`;
