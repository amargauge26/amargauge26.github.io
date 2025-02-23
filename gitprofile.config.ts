const CONFIG = {
  github: {
    username: 'amargauge26',
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
      header: 'Technical Projects',
      projects: [
        {
          title: 'Log Analysis Tool',
          description: 'Python-based tool analyzing server logs with 90% accuracy in pattern recognition',
          imageUrl: 'https://github.com/amargauge26/amargauge26.github.io/blob/main/public/Best-Log-Analysis-Tools.jpeg?raw=true',
          link: 'https://github.com/amargauge26/log-analysis-tool'
        },
        {
          title: 'AI Text Summarizer',
          description: 'Flask web application implementing NLP techniques for document summarization',
          imageUrl: 'https://github.com/amargauge26/amargauge26.github.io/blob/main/public/text_sum.png?raw=true',
          link: 'https://github.com/amargauge26/ai-summarizer'
        },
        {
          title: 'Traffic Analytics System',
          description: 'Real-time vehicle detection using OpenCV and YOLOv8 for congestion analysis',
          imageUrl: 'https://github.com/amargauge26/amargauge26.github.io/blob/main/public/Car_counter.png?raw=true',
          link: 'https://github.com/amargauge26/traffic-analytics'
        },
        {
          title: 'Survey Rep Dashboard',
          description: 'Power BI dashboard analyzing career decision drivers from LinkedIn data',
          imageUrl: 'https://github.com/amargauge26/amargauge26.github.io/blob/main/public/Surgeyrep.png?raw=true',
          link: 'https://github.com/amargauge26/survey-rep'
        }
      ],
    },
  },
  seo: {
    title: 'Amar Deep Singh - Data Analyst',
    description: 'B.Tech in Computer Science | Data Analytics Specialist | Machine Learning Engineer',
    imageURL: '',
  },
  social: {
    linkedin: 'amar0755',
    leetcode: 'AMAR9XD',
    codechef: 'amar9xd',
    website: 'https://amargauge26.github.io',
    email: 'amardeep.singh0755@gmail.com',
    phone: '+91-6264065417',
  },
  resume: {
    fileUrl: 'https://your-domain.com/path-to-resume.pdf', // Upload your PDF and update URL
  },
  skills: [
    'Python',
    'SQL',
    'R',
    'Pandas',
    'NumPy',
    'Matplotlib',
    'Seaborn',
    'Scikit-Learn',
    'Spark',
    'Tableau',
    'Power BI',
    'Machine Learning',
    'Django',
    'FastAPI',
    'REST APIs',
    'Bootstrap',
    'OpenCV',
    'YOLOv8',
    'Flask',
    'NLTK',
    'SpaCy',
    'Regression',
    'Classification',
    'Clustering',
    'Time Series Analysis'
  ],
  experiences: [
    {
      company: 'Skit.ai',
      position: 'Software Engineering Intern',
      from: 'October 2023',
      to: 'November 2023',
      companyLink: 'https://skit.ai/',
    },
    {
      company: 'Netlink Software Private Limited',
      position: 'Data Analytics Intern',
      from: 'October 2024',
      to: 'December 2024',
      companyLink: 'https://www.netlink.com/',
    },
    {
      company: 'CodesOnBytes',
      position: 'Backend Developer Intern',
      from: 'November 2023',
      to: 'December 2023',
      companyLink: 'https://www.linkedin.com/company/codesonbytes/',
    },
  ],
  educations: [
    {
      institution: 'Vellore Institute of Technology',
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      from: '2021',
      to: '2025'
    }
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

