import {
  SBullet,
  SContainer,
  SText,
  STitle,
  STitleContainer,
  Sul,
} from '../Expirience/Expirience.style';
import { SJob, SQoute } from './PriorJob.style';

export function PriorJob() {
  return (
    <SContainer>
      <STitle> PRIOR JOB</STitle>
      <STitleContainer>
        <SJob>
          Marine Engineer at Peter Doehle <span>| 2018-2021</span>
        </SJob>
      </STitleContainer>
      <SQoute>
        I`ve grown from the position of Technical Officer Assistant to 3rd-Engineer in 2,5 years.
      </SQoute>
      <SText>Responsibilities:</SText>
      <SText>
        Ship`s Engine watch officer on Container Vessels, navigating worldwide, responsible for:
      </SText>
      <Sul>
        <li>
          <SBullet>operation of Engine Room auxiliary machinery,</SBullet>
        </li>
        <li>
          <SBullet>ensuring safety and security onboard,</SBullet>
        </li>
        <li>
          <SBullet>
            managing schedule and carrying out maintenance with regard to machinery running hours,
            available time and human resources of Engine Department.
          </SBullet>
        </li>
        <li>
          <SBullet>
            Keeping up-to-date spare-parts store records and all necessary log books.
          </SBullet>
        </li>
      </Sul>
    </SContainer>
  );
}
