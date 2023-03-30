import styled from 'styled-components'

export const SHeroPage = styled.div`
  padding: 60px;
  background: green;
  height: 2200px;
`

export const SHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const SImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 24px;
`

export const SGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const SGroupHorizontal = styled.div`
  display: flex;
  gap: 100px;
`

export const SName = styled.h1`
  font-size: 42px;
  font-weight: 600;
`

export const SJob = styled.h1`
  font-size: 32px;
  font-weight: 600;
`

export const SContacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-end;
`

export const SText = styled.div`
  font-size: 20px;
  font-weight: 500;
`

export const SAdress = styled.a`
  font-size: 20px;
  font-weight: 500;
`
