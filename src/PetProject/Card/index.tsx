import { CardContent } from '../../types';
import {
  ButtonWrapper,
  SButtonPosition,
  SButton,
  SCard,
  SParagraph,
  STitle,
  SImage,
  SButtonDemo,
} from './Card.style';

interface Props {
  card: CardContent;
}

export function Card({ card }: Props) {
  return (
    <SCard>
      <a href={card.demo} target="blank">
        <SImage src={card.image} />
      </a>
      <SButtonPosition color={card.color}>
        <SButtonDemo href={card.demo} target="blank" color={card.color}>
          Demo
        </SButtonDemo>
      </SButtonPosition>
      <STitle>{card.title}</STitle>
      <SParagraph>{card.description}</SParagraph>
      <ButtonWrapper>
        <SButton href={card.client} target="blank">
          Front-End GitHub
        </SButton>
        {card?.backend && (
          <SButton href={card.backend} target="blank">
            BackendEnd GitHub
          </SButton>
        )}
      </ButtonWrapper>
    </SCard>
  );
}
