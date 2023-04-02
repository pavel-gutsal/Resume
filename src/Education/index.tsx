import { STitleContainer } from '../Expirience/Expirience.style';
import { SJob, SQoute } from '../PriorJob/PriorJob.style';
import { SContainer, SSkills, STitle, STitleBorder } from '../Skills/Skills.style';

export function Education() {
  return (
    <SContainer>
      <STitleBorder>
        <STitle marginLeft="54px">EDUCATION</STitle>
      </STitleBorder>
      <SSkills background="rgba(255, 255, 255, 0.5)">
        <STitleContainer>
          <SJob>
            Odessa National Maritime Academy <span>| 2013-2019</span>
          </SJob>
        </STitleContainer>
        <SQoute>Master's degree in Marine Power Plant Operation and Maintenance.</SQoute>
      </SSkills>
    </SContainer>
  );
}
