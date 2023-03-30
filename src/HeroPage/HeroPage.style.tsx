import styled from 'styled-components'

export const SHeroPage = styled.div`
  padding: 34px;
  background: green;
  height: 2000px;
`

export const SHeader = styled.div`
  display: flex;

`

export const SImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 12px;
`;

export const SGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const SName = styled.h1`
  font-size: 32px;
  font-weight: 600;
`;

export const SJob = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;

export const SContacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px
  align-items: flex-end;
`;

export const SText = styled.div`
  font-size: 12px;
  font-weight: 500;
`;

export const SAdress = styled.a`
  font-size: 12px;
  font-weight: 500;
`;