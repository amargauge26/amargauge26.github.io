const CONFIG = {
  github: {
    username: 'amargauge26', // Your GitHub username
  },
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'GitHub Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: [],
      },
    },
    external: {
      header: 'Featured Projects',
      projects: [
        {
          title: 'Project 1',
          description: 'Advanced machine learning implementation for predictive analytics',
          imageUrl: 'https://via.placeholder.com/400x300',
          link: '#'
        },
        {
          title: 'Project 2',
          description: 'Full-stack e-commerce platform with React and Node.js',
          imageUrl: 'https://via.placeholder.com/400x300',
          link: '#'
        },
      ],
    },
  },
  seo: {
    title: 'Amar Gauge - Portfolio',
    description: 'Full Stack Developer | Machine Learning Engineer | Cloud Solutions Architect',
    imageURL: '',
  },
  social: {
    linkedin: 'your-linkedin',
    x: 'your-x-handle',
    website: 'https://your-portfolio.com',
    email: 'your.email@example.com',
  },
  resume: {
    fileUrl: 'https://your-domain.com/resume.pdf',
  },
  skills: [
    'Python',
    'JavaScript',
    'React',
    'Node.js',
    'TensorFlow',
    'AWS',
    'Docker',
    'Kubernetes',
    'PostgreSQL',
    'MongoDB',
    'GraphQL',
    'TypeScript'
  ],
  experiences: [
    {
      company: 'Tech Corp Inc.',
      position: 'Senior Software Engineer',
      from: '2020',
      to: 'Present',
      companyLink: 'https://techcorp.com',
    },
    {
      company: 'Startup Innovations',
      position: 'Full Stack Developer',
      from: '2018',
      to: '2020',
      companyLink: 'https://startupinnovations.com',
    },
  ],
  certifications: [
    {
      name: 'AWS Certified Solutions Architect',
      body: 'Amazon Web Services',
      year: '2023',
      link: '#'
    },
    {
      name: 'Google Cloud Professional Data Engineer',
      body: 'Google Cloud',
      year: '2022',
      link: '#'
    },
  ],
  educations: [
    {
      institution: 'University of Technology',
      degree: 'M.S. Computer Science',
      from: '2016',
      to: '2018',
    },
    {
      institution: 'State College',
      degree: 'B.S. Information Technology',
      from: '2012',
      to: '2016',
    },
  ],
  themeConfig: {
    defaultTheme: 'procyon',
    disableSwitch: false,
    respectPrefersColorScheme: true,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'procyon'
    ],
    customTheme: {
      primary: '#219aaf',
      secondary: '#fc055b',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '2rem',
      '--rounded-btn': '1.5rem',
    },
  },
  enablePWA: true,
};

export default CONFIG;
