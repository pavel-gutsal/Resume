import {
  SBullet,
  SContainer,
  SPosition,
  SText,
  STitle,
  STitleContainer,
  Sul,
} from './Expirience.style';

export function Expirience() {
  return (
    <SContainer>
      <STitle>EXPIRIENCE</STitle>
      <STitleContainer>
        <SPosition>
          Front End Developer <span>| November 2022 - February 2023</span>
        </SPosition>
      </STitleContainer>
      <SText>
        <span>DevelopsToday</span>— assigned to React / NestJS project as Front-End / FullStack
        developer, was responsible for implementing functionality over UI/UX of application and bug
        fixing.
      </SText>
      <SText>Tech Stack:</SText>
      <Sul>
        <li>
          <SBullet>
            Client side: React, Typescript, TanStack Query, MOBX, Ant Design, Handsontable.
          </SBullet>
        </li>
        <li>
          <SBullet>Backend: NestJS framework with MongoDB and Mongoose.</SBullet>
        </li>
      </Sul>
    </SContainer>
  );
}
