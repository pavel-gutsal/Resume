import { STitle, STitleBorder } from '../Skills/Skills.style';
import { IMAGE } from '../image';
import { colors } from '../theme';
import { CardContent } from '../types';
import { Card } from './Card';
import { SContainer } from './PetProject.style';

const CardListArray: CardContent[] = [
  {
    title: 'E-Commerce store',
    description:
      'React, Redux Toolkit, TanStack, styled-components, MUI, Stripe NestJS, MongoDB, Mongoose, JWT, OpenAPI(Swagger)',
    image: IMAGE.ECOMMERCE,
    demo: 'https://pavel-gutsal.github.io/web-Shop-frontend',
    client: 'https://github.com/pavel-gutsal/web-Shop-frontend',
    backend: 'https://github.com/pavel-gutsal/web-shop-backend',
    color: colors.orangeBright,
  },
  {
    title: 'Chat App with private rooms',
    description: 'React project with FireBase managed database, real-time updates, FireBase Auth.',
    image: IMAGE.MESSANGER,
    demo: 'https://messanger-app-1566f.web.app/',
    client: 'https://github.com/pavel-gutsal/messanger',
    color: colors.violet_e,
  },
  {
    title: 'MERN Stack todo app ',
    description:
      'Backend: Express.js server with JWT user authentication. FrontEnd: React with Redux and styled-components.',
    image: IMAGE.TODOAPP,
    demo: 'https://pavel-gutsal.github.io/mern-todo-app-CGS-TEAM-test-task',
    client: 'https://github.com/pavel-gutsal/mern-todo-app-CGS-TEAM-test-task',
    backend: 'https://github.com/pavel-gutsal/mern-todo-app-backend-final',
    color: colors.brown,
  },
];

export function PetProject() {
  return (
    <>
      <STitleBorder>
        <STitle marginLeft="64px">PET PROJECTS</STitle>
      </STitleBorder>
      <SContainer>
        {CardListArray.map((card) => (
          <Card card={card} key={card.title} />
        ))}
      </SContainer>
    </>
  );
}
