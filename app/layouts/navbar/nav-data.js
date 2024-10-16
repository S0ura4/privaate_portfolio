import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'Details',
    pathname: '/#details',
  },
  {
    label: 'Articles',
    pathname: '/articles',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'instagram',
    url: `https://instagram.com/${config.instagram}`, // original commented
    // url: `https://www.instagram.com/karkisaurav71/`,
    icon: 'instagram',
  },
  {
    label: 'Figma',
    url: `https://twitter.com/${config.figma}`, // original commented
    // url: `https://www.figma.com/sourav`,
    icon: 'figma',
  },
  {
    label: 'Github',
    url: `https://twitter.com/${config.github}`, // original commented
    icon: 'github',
  },
];
