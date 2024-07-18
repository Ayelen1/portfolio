import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, linkedin, twitter } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/aye.jpeg'),
  fullName: 'Ayelen Guimarey',
  role: 'BI Engineer | Data Engineer',
  details: [
    { label: 'Phone', value: '+54 9 11 2389 9838', url: 'tel:+54 9 11 2389 9838' },
    { label: 'Email', value: 'ayelen.guimarey@gmail.com', url: 'mailto:ayelen.guimarey@gmail.com' },
    //{ label: 'From', value: 'Warsaw, Poland' },
    //{ label: 'Salary range', value: '18 000 - 25 000 PLN' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '+54 9 11 2389 9838' },
    { label: 'Email', value: 'ayelen.guimarey@gmail.com' },
    { label: 'LinkedIn', value: '/in/ayelen-guimarey', url: 'https://linkedin.com' },
    //{ label: 'GitHub', value: '/mark-freeman', url: 'https://github.com' },
    //{ label: 'Website', value: 'mark-freeman-personal-website.com', url: '/', fullRow: true },
  ],
  description:
    'Highly skilled professional with extensive experience in Business Intelligence (BI) tools such as Qlik and Tableau. Adept at understanding client requirements and developing tailored solutions. Demonstrates solid expertise in data transformation using SQL Server Integration Services (SSIS) and in migrating processes to Hadoop-based Data Lakes with Python, Spark, and Airflow. Experienced in implementing Agile and Scrum methodologies to enhance project efficiency and effectiveness.Recognized for being detail- oriented and a critical thinker, with a strong problem - solving mindset.Proactive team member with excellent communication and interpersonal skills, capable of working independently or collaboratively within an integrated team.',
  tags: [{ name: 'Open for freelance' }, { name: 'Open for relocation' }, { name: 'Open to work remotely' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Ayelen_Guimarey.pdf',
  },
  links: [linkedin({ url: 'https://www.linkedin.com/in/ayelen-guimarey' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
