const CONFIG = {
  github: {
    username: 'amargauge26',
  },
  base: '/',
  seo: {
    title: 'Amar Deep Singh - Data Analyst',
    description: 'B.Tech in Computer Science | Data Analytics Specialist | Machine Learning Engineer | Backend Developer',
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
  experiences: [
    {
      company: 'Skit.ai',
      position: 'Software Engineering Intern',
      from: 'October 2023',
      to: 'November 2023',
      companyLink: 'https://skit.ai/',
      description: 'Optimized application performance through systematic debugging and implementation of efficient algorithms. Developed RESTful APIs handling 500+ daily requests with 99.8% uptime. Collaborated on AI-powered conversational solutions, enhancing user experience and engagement.'
    },
    {
      company: 'Netlink Software Private Limited',
      position: 'Data Analytics Intern',
      from: 'October 2024',
      to: 'December 2024',
      companyLink: 'https://www.netlink.com/',
      description: 'Conducted exploratory data analysis on large datasets, identifying key trends and patterns. Developed predictive models using machine learning algorithms, improving forecast accuracy by 25%.'
    },
    {
      company: 'CodesOnBytes',
      position: 'Backend Developer Intern',
      from: 'November 2023',
      to: 'December 2023',
      companyLink: 'https://www.linkedin.com/company/codesonbytes/',
      description: 'Designed Python-based optimization challenges and automated testing frameworks, improving code coverage by 40%. Enhanced system durability and performance through cross-functional collaboration, reducing runtime by 25%.'
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
  projects: {
     external: {
      header: 'Technical Projects',
      projects: [
        {
          title: 'Log Analysis Tool',
          description: 'Developed a tool to analyze server logs, identifying unusual patterns and errors with 90% accuracy. Created interactive visualizations to track traffic trends and system performance over time.',
          imageUrl: 'https://github.com/amargauge26/amargauge26.github.io/blob/main/public/Best-Log-Analysis-Tools.jpeg?raw=true',
          link: 'https://github.com/amargauge26/log-analysis-tool'
        },
        {
          title: 'AI Text Summarizer',
          description: 'Built a web-based text summarization tool that processes documents and generates concise summaries. Implemented NLP techniques to extract key phrases and improve summary relevance.',
          imageUrl: 'https://github.com/amargauge26/amargauge26.github.io/blob/main/public/text_sum.png?raw=true',
          link: 'https://github.com/amargauge26/ai-summarizer'
        },
        {
          title: 'Traffic Analytics System',
          description: 'Designed a vehicle detection system for traffic monitoring with high accuracy in real-time video feeds. Analyzed traffic data to identify congestion hotspots and generate actionable insights.',
          imageUrl: 'https://github.com/amargauge26/amargauge26.github.io/blob/main/public/Car_counter.png?raw=true',
          link: 'https://github.com/amargauge26/traffic-analytics'
        },
        {
          title: 'Survey Rep',
          description: 'Identified key drivers in career decisions: job difficulty, coworkers, management, salary, using interactive Power BI dashboards. Streamlined data from LinkedIn Forms; transformed & summarized data in Excel to enhance Power BI insights on languages (Python).',
          imageUrl: 'https://github.com/amargauge26/amargauge26.github.io/blob/main/public/Surgeyrep.png?raw=true',
          link: 'https://github.com/amargauge26/survey-rep'
        }
      ],
    },
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


  },
  certifications: [
    {
      name: 'Deloitte Australia Data Analytics Job Simulation',
      body: 'Forage',
      year: 'February 2025',
      link: 'https://www.theforage.com/',
    },
    {
      name: 'Machine Learning and Artificial Intelligence',
      body: 'SmartInternz',
      year: '2023', // Update year if different
      link: 'https://smartinternz.com/',
    },
    {
      name: 'Introduction to SQL',
      body: 'Simplilearn',
      year: '2025', // Update year if different
      link: 'https://smartinternz.com/',
    },
    {
      name: 'Data Science-Validation tes',
      body: 'Cutshort',
      year: '2025', // Update year if different
      link: 'https://smartinternz.com/',
    }
  ],
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
  resume: {
    fileUrl: 'https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/50517583/b8c79af6-af3f-4823-8843-262ad0b50eb7/Amardeep_data_analyst-1.pdf', // Upload your PDF and update URL
  },

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
