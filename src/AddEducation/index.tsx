import { SBullet, SContainer, SText, STitle, Sul } from '../Expirience/Expirience.style';

export function AddEducation() {
  return (
    <SContainer>
      <STitle>ADDITIONAL EDUCATION</STitle>
      <SText>
        Front-End course at Mate academy boot camp, which I completed in under 3 months, where:
      </SText>
      <Sul>
        <li>
          <SBullet>I studied Git, HTML, CSS, JavaScript, TypeScript, React, Node.js</SBullet>
        </li>
        <li>
          <SBullet>
            Every task received code review from mentors who are actively working as Front-End
            developers in the industry.
          </SBullet>
        </li>
      </Sul>
      <SText paddingTop="20px">Udemy:</SText>
      <Sul>
        <li>
          <SBullet>The Complete JavaScript Course 2022: From Zero to Expert! </SBullet>
        </li>
        <li>
          <SBullet>Build Web Apps with React & Firebase,</SBullet>
        </li>
        <li>
          <SBullet>Beginning C++ Programming - From Beginner to Beyond</SBullet>
        </li>
      </Sul>
    </SContainer>
  );
}
