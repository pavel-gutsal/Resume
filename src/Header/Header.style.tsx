import styled from 'styled-components';

export const SHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: -30px;
`;

export const SImage = styled.img`
  height: 350px;
  position: relative;
  top: -10px;
`;

export const SListItem = styled.a`
  display: flex;
  gap: 10px;
  align-items: center;
  text-underline-offset: 4px;
`;

export const SImageBackground = styled.img`
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

export const SGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const SGroupHorizontal = styled.div`
  display: flex;
  gap: 50px;
`;

export const SName = styled.h1`
  font-size: 46px;
  font-weight: 600;
  color: #113578;
`;

export const SJob = styled.h1`
  font-size: 36px;
  font-weight: 600;
  color: #621887;
`;

export const SContacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-end;
`;

export const SText = styled.h3`
  font-size: 24px;
  font-weight: 500;
`;

export const SLocation = styled.h2`
  font-size: 28px;
  font-weight: 500;
  padding-top: 20px;
  display: flex;
  align-items: center;
`;

export const SIcon = styled.img`
  width: 32px;
`;
