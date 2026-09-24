import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'Skills',
    pathname: '/#skills',
  },
  {
    label: 'Certificates',
    pathname: '/certificates',
  },
  {
    label: 'Details',
    pathname: '/#details',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'GitHub',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    url: `https://www.linkedin.com/in/${config.linkedin}/`,
    icon: 'linkedin',
  },
  {
    label: 'X',
    url: `https://x.com/${config.x}`,
    icon: 'x',
  },
  {
    label: 'Instagram',
    url: `https://www.instagram.com/${config.instagram}/`,
    icon: 'instagram',
  },
];
