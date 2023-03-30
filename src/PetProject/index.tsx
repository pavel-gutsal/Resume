import { IMAGE } from '../image'
import { CardContent } from '../types'
import { Card } from './Card'
import { SContainer } from './PetProject.style'

const CardListArray: CardContent[] = [
  {
    title: 'E-Commerce store',
    description:
      'Tech Stack: React, Redux Toolkit, TanStack Query, styled-components, MUI, Stripe NestJS,MongoDB, Mongoose, JWT OpenAPI(Swagger)',
    image: IMAGE.ECOMMERCE,
    demo: 'https://pavel-gutsal.github.io/web-Shop-frontend',
    client: 'https://github.com/pavel-gutsal/web-Shop-frontend',
    backend: 'https://github.com/pavel-gutsal/web-shop-backend',
  },

  {
    title: 'MERN Stack todo app ',
    description:
      'the project in CGS-team written with JWT user validation on on Express.js  and on client-side Styled Components package, and Formic for forms management. ',
    image: IMAGE.TODOAPP,
    demo: 'https://pavel-gutsal.github.io/mern-todo-app-CGS-TEAM-test-task',
    client: 'https://pavel-gutsal.github.io/mern-todo-app-CGS-TEAM-test-task',
    backend: 'https://github.com/pavel-gutsal/mern-todo-app-backend-final',
  },

  {
    title: 'Chat App with private rooms',
    description:
      'the React project with FireBase managed database, real-time updates, services connected - FireBase Authentification, firestore, storage.',
    image: IMAGE.MESSANGER,
    demo: 'https://messanger-app-1566f.web.app/',
    client: 'https://github.com/pavel-gutsal/messanger',
  },
]

export function PetProject() {
  return (
    <SContainer>
      {CardListArray.map((card) => (
        <Card card={card} key={card.title} />
      ))}
    </SContainer>
  )
}
