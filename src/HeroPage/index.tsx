import { IMAGE } from '../image'
import {
  SHeroPage,
  SImage,
  SGroup,
  SName,
  SJob,
  SHeader,
  SContacts,
  SText,
  SAdress,
} from './HeroPage.style'

export function HeroPage() {
  return (
    <SHeroPage>
      <SHeader>
        <SImage src={IMAGE.AVATAR} alt="ava" />
        <SGroup>
          <SName>Paul Gutsal</SName>
          <SJob>FRONTEND DEVELOPER</SJob>
        </SGroup>
        <SContacts>
          <SText>+38 066 466 35 83</SText>
          <SAdress
            href="https://t.me/PaulGutsal"
            target="blank"
          >
            Telegram
          </SAdress>
          <SAdress
            href="mailto:pavel.gutsal@gmail.com"
            target="blank"
          >
            pavel.gutsal@gmail.com
          </SAdress>
          <SAdress
            href="https://www.linkedin.com/in/paul-gutsal/"
            target="blank"
          >
            LinkedIn
          </SAdress>
          <SAdress
            href="https://github.com/pavel-gutsal"
            target="blank"
          >
            GitHub
          </SAdress>
        </SContacts>
      </SHeader>
    </SHeroPage>
  )
}
