import { CardContent } from '../../types'
import {
  ButtonWrapper,
  SButtonMain,
  SButton,
  SCard,
  SParagraph,
  STitle,
  SSourceButtons,
  SImage,
} from './Card.style'

interface Props {
  card: CardContent
}

export function Card({ card }: Props) {
  return (
    <SCard>
      <SImage src={card.image} />
      <STitle>{card.title}</STitle>
      <SParagraph>{card.description}</SParagraph>
      <ButtonWrapper>
        <SButtonMain href={card.demo} target="blank">
          Demo
        </SButtonMain>
        <SSourceButtons>
          <SButton href={card.client} target="blank">
            Front-End GitHub
          </SButton>
          {card?.backend && (
            <SButton href={card.backend} target="blank">
              BackendEnd GitHub
            </SButton>
          )}
        </SSourceButtons>
      </ButtonWrapper>
    </SCard>
  )
}
