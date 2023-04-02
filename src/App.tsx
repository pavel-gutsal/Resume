import { AddEducation } from './AddEducation';
import { SHeroPage } from './App.styled';
import { Background } from './Background';
import { Education } from './Education';
import { Expirience } from './Expirience';
import { Header } from './Header';
import { PetProject } from './PetProject';
import { PriorJob } from './PriorJob';
import { Skills } from './Skills';
import { Summary } from './Summary';
import { IMAGE } from './image';

export function App() {
  return (
    <SHeroPage>
      {/* first page */}
      <Background image={IMAGE.BLOBS.BLOBS} />
      <Header />
      <Summary />
      <Skills />
      <Expirience />
      <PetProject />
      {/* second page */}
      {/* <Background image={IMAGE.BLOBS.BLOBS_B} />
      <PriorJob />
      <Education />
      <AddEducation /> */}
    </SHeroPage>
  );
}
