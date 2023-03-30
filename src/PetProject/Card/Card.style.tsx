import styled from 'styled-components'

export const SCard = styled.div`
  width: 100%;
  padding: 16px;
  height: 500px;
  border-radius: 16px;
  border: 1px solid #b7b7b7;
  box-shadow: 0 0 10px 0 rgba(81, 81, 81, 0.3);
  background: #ebcaff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  overflow: hidden;
`

export const SImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`

export const STitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 12px;
  color: white;
`

export const SParagraph = styled.div`
  font-size: 20px;
  padding-bottom: 12px;
  color: white;
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const SButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  width: 100%;
  height: 42px;
  background: #ff0044;
  box-shadow: 0 0 10px 0 #ff0044;
  border-radius: 25px;
`

export const SButtonMain = styled(SButton)`
  background: orange;
  box-shadow: 0 0 10px 0 orange;
  font-size: 24px;
`

export const SSourceButtons = styled.div`
  display: flex;
  gap: 16px;
`