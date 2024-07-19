import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, instagram, linkedin, twitter, website } from '../helpers/links';
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

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'SR BI Engineer',
      company: 'Santander Tecnologia',
      image: import('@/assets/logos/santec-logo.jpg'),
      dates: [new Date('2020-02'), null],
      description: `
        - Designed, developed, and implemented data quality control processes in a Data Lake through ETL pipelines
        - Designed, developed, and supported interactive dashboard reports
        - Designed, developed, and implemented a PostgreSQL database
      `,
      tagsList: {
        title: 'Technologies',
        tags: [
          airflow(),
          aws(),
          databricks(),
          dbeaver(),
          git(),
          hadoop(),
          hive(),
          impala(),
          oracle(),
          postgreSql(),
          presto(),
          pycharm(),
          python(),
          spark(),
          sqlserver(),
          tableau(),
          trello(),
          jira(),
],
      },
      links: [linkedin({ url: 'https://www.linkedin.com/company/santandertec' })],
    },
    {
      role: 'SSR BI Engineer',
      company: 'Santander',
      image: import('@/assets/logos/santander-logo.jpeg'),
      dates: [new Date('2019-04'), new Date('2020-02')],
      description: `
        - Analyzed business requirements
        - Extracted, transformed, and loaded data using SQL Server Integration Services (SSIS)
        - Produced dashboards and reports to support risk area decision-making using Tableau and SQL Server Reporting Services (SSRS)
        - Migrated processes to a Hadoop-based Data Lake using Spark, Hive, and Sqoop as the main tools for development, and Airflow for workflow organization
        - Participated in teaching a data workshop (specifically SQL) to drive user transformation to a Data-Driven Platform, including the design and content of the workshop       `,
      tagsList: {
        title: 'Technologies',
        tags: [sqlserver(),
          tableau(),
          airflow(),
          python(),
          spark(),
          git(),
          oracle(),
          trello(),
          ],
      },
      links: [website({ url: 'https://www.santander.com.ar/' }), linkedin({ url: 'https://www.linkedin.com/company/banco-santander-argentina/' })],
    },
    {
      role: 'BI Consultant',
      company: 'IT Maker',
      image: import('@/assets/logos/ITMaker-logo.jpeg'),
      dates: [new Date('2016-09'), new Date('2019-04')],
      description: `
        - Analyzed client requirements, extracted data, and designed data models
        - Developed and designed dashboards for data analysis
        - Trained new employees on the tools and processes used
      `,
      tagsList: {
        title: 'Technologies',
        tags: [qlik(), sqlserver(), excel(), trello()],
      },
      links: [website({ url: 'https://itmaker.com.ar/' }), linkedin({ url: 'https://www.linkedin.com/company/itmakerarg' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
