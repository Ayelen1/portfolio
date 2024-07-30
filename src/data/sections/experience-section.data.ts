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
      role: 'Data Engineer',
      company: 'Santander Technology',
      image: import('@/assets/logos/santec-logo.jpg'),
      dates: [new Date('2022-05'), new Date('2023-05')],
      description: `
        - Design, development, and implementation of data quality control processes using ETL pipelines for data models migrated to a cloud-based Data Lake
        - Design, development, and support of interactive dashboard reports, enhancing data visualization and analysis for decision-making
        - Design, development, and implementation of a PostgreSQL database
        - Data quality control of data models, effectively coordinating with users and developers to ensure reliability and accuracy in the use of tables
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
      role: 'BI Engineer',
      company: 'Santander Bank',
      image: import('@/assets/logos/santander-logo.jpeg'),
      dates: [new Date('2020-03'), new Date('2022-05')],
      description: `
        - Analysis of user needs in the risk area, development of ETL processes, and creation of dashboards and reports to support decision-making
        - Development of ETL processes to migrate data models to a cloud-based Data Lake, optimizing data integration and management
        - Training of users through SQL workshops, driving the transformation towards a data-driven platform and promoting a culture of informed decision-making       `,
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
      dates: [new Date('2018-07'), new Date('2020-03')],
      description: `
        - Analysis and collection of requirements through client meetings to understand their needs and translate them into BI solutions. Documentation and prioritization of requirements to ensure that the proposed solutions meet the client's expectations and objectives
        - Development and implementation of BI solutions through the design and development of robust and scalable data models, as well as interactive and customized dashboards to enhance data visualization and facilitate decision-making
        - Optimization and continuous improvement of the implemented dashboards based on user feedback and the identification of opportunities to improve processes, ensuring greater efficiency and adaptability to the changing needs of the business
      `,
      tagsList: {
        title: 'Technologies',
        tags: [qlik(), sqlserver(), oracle(), excel(), trello()],
      },
      links: [website({ url: 'https://itmaker.com.ar/' }), linkedin({ url: 'https://www.linkedin.com/company/itmakerarg' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
