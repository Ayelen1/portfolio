import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  airflow,
  aws,
  databricks,
  dbeaver,
  excel,
  git,
  hadoop,
  hive,
  impala,
  mySQL,
  oracle,
  postgreSql,
  presto,
  pycharm,
  python,
  qlik,
  spark,
  sqlserver,
  tableau,
  trello,
  jira,
  vscode,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'Technologies',
      skills: [
        sqlserver({level: 4}),

        mySQL({level: 3}),

        oracle({level: 3}),

        postgreSql({ level: 3}),
       
        python({level: 4}),

        spark({
          level: 3,
          description:
            'PySpark',
        }),

        airflow({level: 3}),

        hadoop({ level: 3}),

        hive({ level: 3}),

        impala({level: 3}),

        databricks({ level: 3 }),

        aws({level:3}),

        presto({ level: 3 }),
      ],
    },
    {
      title: 'Tools',
      skills: [tableau(), qlik(), git(), jira(), trello(), pycharm(), vscode(), dbeaver(), excel()],
    },
    {
      title: 'Languages',
      skills: [
        { icon: 'circle-flags:es-variant', name: 'Spanish - Native' },
        { icon: 'circle-flags:us', name: 'English - B2' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
