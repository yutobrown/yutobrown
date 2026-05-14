import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,

} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'AI-Driven Development',
    icon: frontend,
  },
  {
    title: 'Fullstack Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
  // {
  //   title: 'Effective communication',
  //   icon: prototyping,
  // },
  // {
  //   title: 'Problem-Solving & Reliability',
  //   icon: prototyping,
  // },
  // {
  //   title: 'Maintanence',
  //   icon: prototyping,
  // },
  // {
  //   title: 'Adaptability & Continuous Learning',
  //   icon: prototyping,
  // },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Junior Web Developer',
    company_name: 'I started my career as a Junior Web Developer, focusing on building a strong foundation in web technologies. I worked on basic frontend and backend tasks using HTML, CSS, JavaScript, and introductory backend frameworks. My main responsibility was to support feature development, fix bugs, and learn industry development workflows like Git, debugging, and deployment basics.',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2019 - Feb 2020',
  },
  {
    title: 'Frontend Developer',
    company_name: 'I moved into a frontend-focused role where I worked extensively on building responsive and interactive user interfaces. I gained experience with modern JavaScript frameworks and improved my skills in component-based architecture, state management, and UI performance optimization. I collaborated closely with designers and backend developers to deliver smooth user experiences.',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2020 - May 2021',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'I transitioned into full stack development, taking responsibility for both frontend and backend features. I worked on REST APIs, server-side logic, and database integration. This helped me build end-to-end features and understand how frontend and backend systems interact in scalable applications.',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2021 - Oct 2022',
  },
  {
    title: 'Junior Software Engineer',
    company_name: 'At this stage, I started owning full modules and delivering features independently. I focused on writing reusable, maintainable code and improving application performance. I also contributed to architectural discussions and participated in code reviews, helping improve overall code quality within the team.',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2022 - Feb 2023',
  },
  {
    title: 'Senior Web Developer',
    company_name: 'I took on more complex responsibilities, working on system design improvements and scalable backend architecture. I contributed to optimizing APIs, improving application performance, and implementing better deployment workflows. I also began mentoring junior developers and guiding technical decisions in projects.',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2023 - Jan 2024 ',
  },
  {
    title: 'Senior Full Stack Engineer ',
    company_name: 'I work as a Senior Full Stack Engineer, focusing on designing scalable web systems and leading development efforts. I am responsible for technical planning, system architecture, and ensuring high performance and reliability of applications. I also mentor developers and help drive best practices across frontend and backend development.',
    icon: dcc,
    iconBg: '#333333',
    date: 'Jan 2024 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'KomiKult',
    description: 'A comic characters list app that displays Marvel characters.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Leaderboard',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
