import styled from 'styled-components';
import { colors } from '../../theme';

export const SCard = styled.div`
  width: 100%;
  padding: 16px;
  height: 580px;
  border-radius: 16px;
  border: 1px solid #d2d2d2;
  box-shadow: 0 0 8px 0 rgba(81, 81, 81, 0.25);
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: start;
  position: relative;
  overflow: hidden;
`;

export const SImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export const STitle = styled.div`
  font-size: 28px;
  font-weight: 500;
  padding-bottom: 12px;
  color: #383838;
  padding-top: 230px;
`;

export const SParagraph = styled.div`
  font-size: 28px;
  padding-bottom: 12px;
  color: #2d2d2d;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  height: 120px;
  width: ${`calc(100% - 120px)`};
`;

export const SButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #424242;
  font-size: 28px;
  width: 100%;
  height: 50px;
  background: ${colors.green};
  box-shadow: 0 0 8px 0 rgb(202, 202, 202);
  border: 1px solid #d1d1d1;
  border-radius: 25px;
  text-underline-offset: 4px;
`;

interface ColorProps {
  color: string;
}

export const SButtonDemo = styled(SButton)<ColorProps>`
  background: ${({ color }) => color};
  box-shadow: ${({ color }) => `0 0 8px 0 ${color}`};
  border: 1px solid #a8a8a8;
  font-size: 28px;
  text-underline-offset: 5px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 110px;
  height: 50px;
`;

export const SButtonPosition = styled.div<ColorProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 183px;
  left: 0;
  z-index: 2;

  &:before {
    content: "";
    width: 100%;
    height: 4px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background: ${({ color }) => color};
    position: absolute;
    z-index: -1;
  }
`

export const SSourceButtons = styled.div`
  display: flex;
  gap: 16px;
`;
