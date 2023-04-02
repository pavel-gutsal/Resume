import { SContainer, SList, SSkills, STitle, STitleBorder } from './Skills.style';

export function Skills() {
  return (
    <SContainer>
      <STitleBorder>
        <STitle>SKILLS</STitle>
      </STitleBorder>
      <SSkills>
        <SList>TypeScript</SList>
        <SList>JavaScript</SList>
        <SList>React</SList>
        <SList>Next.js</SList>
        <SList>Redux Toolkit</SList>
        <SList>TanStack Query</SList>
        <SList>NestJS</SList>
        <SList>Express.js</SList>
        <SList>MongoDB</SList>
        <SList>Mongoose</SList>
        <SList>PostgreSQL</SList>
        <SList>TypeORM</SList>
        <SList>Docker</SList>
        <SList>CSS</SList>
        <SList>styled-components</SList>
        <SList>Tailwind</SList>
        <SList>Git</SList>
      </SSkills>
    </SContainer>
  );
}
