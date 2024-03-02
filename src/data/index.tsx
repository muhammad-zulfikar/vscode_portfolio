import React from 'react';
import Greeter from '../views/Greeter';
// eslint-disable-next-line
import Diploma from '../views/Diploma';
import { PageLink, TabLink } from '../models';
import { jsOrange, midBlue } from '../theme/colors';

import staticData from './json/static.json';
import contactData from './json/contact.json';
// eslint-disable-next-line
import pkg from '../../package.json';

// eslint-disable-next-line
import { calculateDiplomaProgress } from '../utils';

export const pages: PageLink[] = [
  {
    name: 'Home',
    url: '/',
    icon: 'home',
    isInternal: true,
    comp: () => (
      <Greeter
        staticData={staticData}
        contactData={contactData}
        repoUrl={pkg.repository.url}
      />
    ),
  },
  // {
  //   name: 'Computer Science',
  //   url: '/cs',
  //   icon: 'graduation-cap',
  //   isInternal: true,
  //   badge: `${calculateDiplomaProgress(csData, 0)}%`,
  //   comp: () => <Diploma diplomaData={csData} />,
  // },
  // {
  //   name: 'Business Administration',
  //   url: '/ba',
  //   icon: 'graduation-cap',
  //   isInternal: true,
  //   badge: `${calculateDiplomaProgress(baData, 0)}%`,
  //   comp: () => <Diploma diplomaData={baData} />,
  // },
];

export const tabs: TabLink[] = [
  {
    name: 'experience.html',
    url: '/experience',
    icon: ['fab', 'html5'],
    color: 'orange',
    mdFileName: 'experience',
  },
  {
    name: 'education.css',
    url: '/education',
    icon: ['fab', 'css3'],
    color: midBlue,
    mdFileName: 'education',
  },
  {
    name: 'projects.js',
    url: '/projects',
    icon: ['fab', 'js'],
    color: jsOrange,
    mdFileName: 'projects',
  },
  {
    name: 'about.py',
    url: '/about',
    icon: ['fab', 'python'],
    color: midBlue,
    mdFileName: 'about',
  },
];
