import { mobile, backend, creator, web, javascript, typescript, html, css, reactjs, redux, tailwind, nodejs, mongodb, git, docker, meta, starbucks, carrent, jobit, tripguide, threejs, next } from '../assets/assets'

const navLinks = [
  {
    id: '',
    title: 'Home'
  },
  {
    id: '#about',
    title: 'About'
  },
  {
    id: '#work',
    title: 'Work'
  },
  {
    id: '#contact',
    title: 'Contact'
  }
]

const services = [
  {
    title: 'MERN Stack Developer',
    icon: web
  },
  {
    title: 'React Native Developer',
    icon: mobile
  },
  {
    title: 'Three Js Developer',
    icon: backend
  },
  {
    title: 'Content Creator',
    icon: creator
  }
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'TypeScript',
    icon: typescript
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'Redux Toolkit',
    icon: redux
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind
  },
  {
    name: 'Node JS',
    icon: nodejs
  },
  {
    name: 'MongoDB',
    icon: mongodb
  },
  {
    name: 'Three JS',
    icon: threejs
  },
  {
    name: 'git',
    icon: git
  },

  {
    name: 'docker',
    icon: docker
  },
  {
    name: 'Next JS',
    icon: next
  }
]

const experiences = [
  {
    title: 'Front-end Developer',
    company_name: 'Alif Techs',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'july 2024 - january 2025',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  },
  {
    title: 'Front-end Developer',
    company_name: 'Alif Techs',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'july 2024 - january 2025',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  },
  {
    title: 'Front-end Developer',
    company_name: 'Alif Techs',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'july 2024 - january 2025',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  },

  {
    title: 'Full stack Developer',
    company_name: 'Freelancer',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'Jan 2025 - Present',
    points: [
      'Developing and maintaining web applications using React.js,Node.js,Mongodb,Tailwind.css and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  }
]

const testimonials = [
  {
    testimonial: 'Your UI/UX is sleek, responsive, and high-performing, showcasing your mastery of modern frameworks',
    name: 'Nesredin Bullo',
    designation: 'CFO',
    company: 'Freight Canvas',
    image: meta
  },
  {
    testimonial: 'You consistently deliver top-quality work on time with strong problem-solving and dedication.',
    name: 'Kedir jabir',
    designation: 'Full-stack developer',
    company: 'Alif Techs',
    image: meta
  },
  {
    testimonial: ' I never thought I’d find a developer here who could transform my Figma design into a flawless, functional website. Truly a rare talent!',
    name: 'PhiloFix',
    designation: 'UI/UX designer',
    company: 'Alif Techs',
    image: meta
  }
]

const projects = [
  {
    name: 'Suza Coffee Export ',
    description: 'Developed a dynamic website for a coffee export company, optimizing global reach and user engagement. Contact me for a tailored web solution!',

    tags: [
      {
        name: 'Reactjs',
        color: 'blue-text-gradient'
      },
      {
        name: 'Css',
        color: 'green-text-gradient'
      },
      {
        name: 'Front-end',
        color: 'pink-text-gradient'
      }
    ],
    image: carrent,
    source_code_link: 'https://github.com/'
  },
  {
    name: 'Z-Shop',
    description: 'Explore my sample E-commerce website to see a creative, user-friendly design that showcases my web development skills. Contact me for custom solutions tailored to your business!',

    tags: [
      {
        name: 'Reactjs',
        color: 'blue-text-gradient'
      },
      {
        name: 'Tailwind.css',
        color: 'green-text-gradient'
      },
      {
        name: 'Front-end',
        color: 'pink-text-gradient'
      }
    ],
    image: jobit,
    source_code_link: 'https://github.com/Ziyin00/E-commerceFrontend.git'
  },
  {
    name: 'Z-Fitness Club',
    description: "Explore my sample fitness club website design, built with user-friendly navigation, responsive layouts, and modern aesthetics—perfect for your gym's online presence! ",

    tags: [
      {
        name: 'Nextjs',
        color: 'blue-text-gradient'
      },
      {
        name: 'Tailwind.css',
        color: 'green-text-gradient'
      },
      {
        name: 'Front-end',
        color: 'pink-text-gradient'
      }
    ],
    image: tripguide,
    source_code_link: 'https://github.com/Ziyin00/Z-gym.git'
  }
]

export { services, technologies, experiences, testimonials, projects, navLinks }
