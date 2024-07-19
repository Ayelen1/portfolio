import type { TestimonialsSection } from '@/types/sections/testimonials-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin, website } from '../helpers/links';

const testimonialsSectionData = {
  config: {
    title: 'Courses',
    slug: 'testimonials',
    icon: 'fa6-solid:comment',
    visible: true,
  },
  testimonials: [
    {
      image: import('@/assets/testimonials/digitalhouse-logo.jpg'),
      author: 'Data Analytics',
      relation: 'Digital House - April 2023',
      content:
        '',
      links: [website({ url: 'https://www.digitalhouse.com/' })],
    },
    {
      image: import('@/assets/testimonials/digitalhouse-logo.jpg'),
      author: 'Introducción a Data Science',
      relation: 'Digital House - March 2022',
      content:
        '',
      links: [website({ url: 'https://www.digitalhouse.com/' })],
    },
    {
      image: import('@/assets/testimonials/educacionit-logo.jpg'),
      author: 'Ethical Hacking',
      relation: 'Education IT - March 2018',
      content:
        '',
      links: [website({ url: 'https://www.educacionit.com/curso-de-ethical-hacking' })],
    },
  ],
} as const satisfies ReadonlyDeep<TestimonialsSection>;

export default testimonialsSectionData;
