import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const airflow = createSkillFactory({
  name: 'Apache Airflow',
  icon: 'devicon:apacheairflow',
  iconColor: '#311C87',
  url: 'https://airflow.apache.org/',
});

export const apolloGraphql = createSkillFactory({
  name: 'Apollo GraphQL',
  icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  url: 'https://www.apollographql.com/',
});

export const astro = createSkillFactory({
  name: 'Astro',
  icon: 'simple-icons:astro',
  iconColor: '#FF5D01',
  url: 'https://astro.build/',
});

export const aws= createSkillFactory({
  name: 'AWS',
  icon: 'logos:aws',
  iconColor: '#FF5D01',
  url: 'https://aws.amazon.com/',
});

export const chakraUi = createSkillFactory({
  name: 'Chakra UI',
  icon: 'simple-icons:chakraui',
  iconColor: '#319795',
  url: 'https://chakra-ui.com/',
});

export const cypress = createSkillFactory({
  name: 'Cypress',
  icon: 'simple-icons:cypress',
  iconColor: '#17202C',
  url: 'https://www.cypress.io/',
});

export const databricks = createSkillFactory({
  name: 'Databricks',
  icon: 'simple-icons:databricks',
  iconColor: '#000',
  url: 'https://www.databricks.com/',
});

export const dbeaver = createSkillFactory({
  name: 'DBeaver',
  icon: 'simple-icons:dbeaver',
  iconColor: '#0062FF',
  url: 'https://dbeaver.io/',
});

export const eslint = createSkillFactory({
  name: 'ESLint',
  icon: 'simple-icons:eslint',
  iconColor: '#4B32C3',
  url: 'https://eslint.org/',
});

export const excel = createSkillFactory({
  name: 'Excel',
  icon: 'vscode-icons:file-type-excel2',
  iconColor: '#4B32C3',
  url: 'https://www.microsoft.com/en-us/microsoft-365/excel',
});

export const firebase = createSkillFactory({
  name: 'Firebase',
  icon: 'simple-icons:firebase',
  iconColor: '#FFCA28',
  url: 'https://firebase.google.com/',
});

export const git = createSkillFactory({
  name: 'GitHub/GitLab',
  icon: 'simple-icons:git',
  iconColor: '#FF0000',
  url: 'https://git-scm.com/',
});

export const hadoop = createSkillFactory({
  name: 'Apache Hadoop',
  icon: 'devicon:hadoop',
  iconColor: '#FFD045',
  url: 'https://hadoop.apache.org/',
});

export const hive = createSkillFactory({
  name: 'Apache Hive',
  icon: 'simple-icons:apachehive',
  iconColor: '#000',
  url: 'https://hive.apache.org/',
});

export const impala = createSkillFactory({
  name: 'Apache Impala',
  icon: 'logos:impala',
  iconColor: '#FDCB58',
  url: 'https://impala.apache.org/',
});

export const jest = createSkillFactory({
  name: 'Jest',
  icon: 'simple-icons:jest',
  iconColor: '#C21325',
  url: 'https://jestjs.io/',
});

export const jira = createSkillFactory({
  name: 'Jira',
  icon: 'devicon:jira',
  iconColor: '#C21325',
  url: 'https://www.atlassian.com/software/jira',
});

export const mongoDb = createSkillFactory({
  name: 'MongoDB',
  icon: 'simple-icons:mongodb',
  iconColor: '#47A248',
  url: 'https://www.mongodb.com/',
});

export const mySQL = createSkillFactory({
  name: 'MySQL',
  icon: 'devicon:mysql',
  iconColor: '#47A248',
  url: 'https://www.mysql.com/',
});


export const nestJs = createSkillFactory({
  name: 'NestJS',
  icon: 'simple-icons:nestjs',
  iconColor: '#E0234E',
  url: 'https://nestjs.com/',
});

export const nextJs = createSkillFactory({
  name: 'Next.js',
  icon: 'simple-icons:nextdotjs',
  iconColor: '#000000',
  url: 'https://nextjs.org/',
});

export const nx = createSkillFactory({
  name: 'Nx',
  icon: 'simple-icons:nx',
  iconColor: '#143055',
  url: 'https://nx.dev/',
});

export const oracle = createSkillFactory({
  name: 'Oracle',
  icon: 'simple-icons:oracle',
  iconColor: '#FF0000',
  url: 'https://www.oracle.com/',
});

export const pnpm = createSkillFactory({
  name: 'pnpm',
  icon: 'simple-icons:pnpm',
  iconColor: '#F69220',
  url: 'https://pnpm.io/',
});

export const postgreSql = createSkillFactory({
  name: 'PostgreSQL',
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  url: 'https://www.postgresql.org/',
});

export const presto = createSkillFactory({
  name: 'Presto',
  icon: 'logos:presto-icon',
  iconColor: '#F7B93E',
  url: 'https://prestodb.io/',
});

export const prettier = createSkillFactory({
  name: 'Prettier',
  icon: 'simple-icons:prettier',
  iconColor: '#F7B93E',
  url: 'https://prettier.io/',
});

export const pycharm = createSkillFactory({
  name: 'PyCharm',
  icon: 'devicon:pycharm',
  iconColor: '#F7B93E',
  url: 'https://www.jetbrains.com/pycharm/',
});


export const python = createSkillFactory({
  name: 'Python',
  icon: 'devicon:python',
  iconColor: '#F7B93E',
  url: 'https://www.python.org/',
});

export const qlik = createSkillFactory({
  name: 'QlikView/Qlik Sense',
  icon: 'vscode-icons:file-type-qlikview',
  iconColor: '#F7B93E',
  url: 'https://www.qlik.com/',
});

export const react = createSkillFactory({
  name: 'React.js',
  icon: 'simple-icons:react',
  iconColor: '#61DAFB',
  url: 'https://reactjs.org/',
});

export const reactQuery = createSkillFactory({
  name: 'React Query',
  icon: 'simple-icons:reactquery',
  iconColor: '#FF4154',
  url: 'https://tanstack.com/query',
});

export const sass = createSkillFactory({
  name: 'SASS',
  icon: 'simple-icons:sass',
  iconColor: '#CC6699',
  url: 'https://sass-lang.com/',
});

export const spark = createSkillFactory({
  name: 'Apache Spark',
  icon: 'simple-icons:apachespark',
  iconColor: '#CC6699',
  url: 'https://spark.apache.org/',
});

export const sqlserver = createSkillFactory({
  name: 'SQL Server',
  icon: 'devicon:microsoftsqlserver',
  iconColor: '#CC6699',
  url: 'https://www.microsoft.com/en-us/sql-server/sql-server-downloads',
});

export const supabase = createSkillFactory({
  name: 'Supabase',
  icon: 'simple-icons:supabase',
  iconColor: '#3ECF8E',
  url: 'https://supabase.io/',
});

export const tableau = createSkillFactory({
  name: 'Tableau',
  icon: 'logos:tableau-icon',
  iconColor: '#06B6D4',
  url: 'https://www.tableau.com/',
});

export const tailwindCss = createSkillFactory({
  name: 'Tailwind CSS',
  icon: 'simple-icons:tailwindcss',
  iconColor: '#06B6D4',
  url: 'https://tailwindcss.com/',
});

export const trello = createSkillFactory({
  name: 'Trello',
  icon: 'devicon:trello',
  iconColor: '#06B6D4',
  url: 'https://trello.com/',

}); 
export const typescript = createSkillFactory({
  name: 'TypeScript',
  icon: 'simple-icons:typescript',
  iconColor: '#3178C6',
  url: 'https://www.typescriptlang.org/',
});

export const vscode = createSkillFactory({
  name: 'VS Code',
  icon: 'devicon:vscode',
  iconColor: '#F7B93E',
  url: 'https://code.visualstudio.com/',
});

export const vue = createSkillFactory({
  name: 'Vue.js',
  icon: 'simple-icons:vuedotjs',
  iconColor: '#4FC08D',
  url: 'https://vuejs.org/',
});
