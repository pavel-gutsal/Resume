import { SBackground, SImage, SBackgroundGradient } from './Background.style';

interface Props {
  image: string;
}

export function Background({ image }: Props) {
  return (
    <SBackground>
      <SImage src={image} />
      <SBackgroundGradient />
    </SBackground>
  );
}
