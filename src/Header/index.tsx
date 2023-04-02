import { IMAGE } from '../image';
import {
  SImage,
  SGroup,
  SName,
  SJob,
  SHeader,
  SContacts,
  SText,
  SGroupHorizontal,
  SLocation,
  SListItem,
  SIcon,
} from './Header.style';

export function Header() {
  return (
    <SHeader>
      <SGroupHorizontal>
        <SImage src={IMAGE.AVATAR} alt="ava" />
        <SGroup>
          <SName>Paul Gutsal</SName>
          <SJob>FRONTEND DEVELOPER</SJob>
        </SGroup>
      </SGroupHorizontal>
      <SContacts>
        <SListItem>
          <SText>+38 066 466 35 83</SText>
          <SIcon src={IMAGE.CONTACTS.TELEPHONE} />
        </SListItem>
        <SListItem href="https://t.me/PaulGutsal" target="blank">
          <SText>Telegram</SText>
          <SIcon src={IMAGE.CONTACTS.TELEGRAM} />
        </SListItem>
        <SListItem href="mailto:pavel.gutsal@gmail.com" target="blank">
          <SText>pavel.gutsal@gmail.com</SText>
          <SIcon src={IMAGE.CONTACTS.GMAIL} />
        </SListItem>
        <SListItem href="https://www.linkedin.com/in/paul-gutsal/" target="blank">
          <SText>LinkedIn</SText>
          <SIcon src={IMAGE.CONTACTS.LINKEDIN} />
        </SListItem>
        <SListItem href="https://github.com/pavel-gutsal" target="blank">
          <SText>GitHub</SText>
          <SIcon src={IMAGE.CONTACTS.GITHUB} />
        </SListItem>
        <SLocation>
          Odessa, Ukraine, remote
          <SIcon src={IMAGE.CONTACTS.LOCATION} />
        </SLocation>
      </SContacts>
    </SHeader>
  );
}
