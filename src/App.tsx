import { SHeroPage } from './App.styled'
import { Expirience } from './Expirience'
import { Header } from './Header'
import { PetProject } from './PetProject'
import { Skills } from './Skills'
import { Summary } from './Summary'

export function App() {
  return (
    <SHeroPage>
      <Header />
      <Summary />
      <Skills />
      <Expirience />
      <PetProject />
    </SHeroPage>
  )
}
