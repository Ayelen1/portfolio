import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: `Bachelor's Degree in Information Systems Engineering`,
      institution: 'National Technological University',
      image: import('@/assets/logos/UTN-logo.jpg'),
      dates: [new Date('2014.02'), new Date('2021.08')],
      description: ' ',
      links: [website({ url: 'https://utn.edu.ar/' })],
    },
    {
      title: 'High School Diploma with a Specialization in Economics and Organizational Management',
      institution: 'Instituto Social Militar Dr. Dámaso Centeno',
      image: import('@/assets/logos/damaso-logo.jpg'),
      dates: [new Date('2009.01'), new Date('2013.12')],
      description: '',
      links: [website({ url: 'https://www.damasocenteno.edu.ar/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
