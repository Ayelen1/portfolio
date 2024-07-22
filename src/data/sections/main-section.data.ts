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
  role: 'Data Engineer',
  details: [
    //{ label: 'Phone', value: '+54 9 11 2389 9838', url: 'tel:+54 9 11 2389 9838' },
    { label: 'Email', value: 'ayelen.guimarey@gmail.com', url: 'mailto:ayelen.guimarey@gmail.com' },
    { label: 'From', value: 'Buenos Aires, Argentina' },
    //{ label: 'Salary range', value: '18 000 - 25 000 PLN' },
  ],
  pdfDetails: [
   // { label: 'Phone', value: '+54 9 11 2389 9838' },
    { label: 'Email', value: 'ayelen.guimarey@gmail.com' },
    { label: 'LinkedIn', value: '/in/ayelen-guimarey', url: 'https://linkedin.com' },
    //{ label: 'GitHub', value: '/mark-freeman', url: 'https://github.com' },
    //{ label: 'Website', value: 'mark-freeman-personal-website.com', url: '/', fullRow: true },
  ],
  description:
    'I am a Systems Engineer with a focus on Data, graduated in 2021, with extensive experience in ETL process development, dashboard creation, and customer requirements analysis. Thrives on challenges and continuous learning. Committed to fostering a positive and collaborative work environment as a key to achieving goals.',
  tags: [{ name: 'Open for freelance' }, { name: 'Open for relocation' }, { name: 'Open to work remotely' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Ayelen_Guimarey.pdf',
  },
  links: [linkedin({ url: 'https://www.linkedin.com/in/ayelen-guimarey' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
