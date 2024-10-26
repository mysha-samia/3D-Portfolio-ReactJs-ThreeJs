//contents in the application 


import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    cmed,
    iub,
    vnsc,
    mysha,
    angular,
    java,
    expressJs,
    nextJs,
    threeJs
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "FullStack Web Developer",
      icon: web,
    },
    {
      title: "React Js Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Angular",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threeJs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "angular",
      icon: angular,
    },
    {
      name: "nextJs",
      icon: nextJs,
    },
    {
      name: "expressJs",
      icon: expressJs,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Cmed-Health",
      icon: cmed,
      iconBg: "#383E56",
      date: "February 2024 - August 2024",
      points: [
        "Developing and maintaining web applications using Amgular.js and React.js other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "BSC in Computer Science & Engineering",
      company_name: "Independent University of Bangladesh",
      icon: iub,
      iconBg: "#E6DEDD",
      date: "November 2020 - September 2024",
      points: [
        "Studied Bsc in Computer Science & Engineering (CSE)",
        "I graduated with a degree in Computer Science Engineering, where I developed strong technical skills in programming, algorithms, and system design.",
        "My university experience honed my problem-solving abilities through hands-on projects and collaborative work. ",
        "This solid foundation fuels my passion for full stack development and drives my aspirations as a software engineer.",
        "CGPA:3.46"
        
      ],
    },
    {
      title: "HSC",
      company_name: "Viqarunnisa Noon School & College",
      icon: vnsc,
      iconBg: "#383E56",
      date: "Jan 2017 - Jan 2019",
      points: [
    "I completed my HSC from Viqarunnisa Noon School and College, where I pursued a science background.",
     "GPA : Golden A+"
      ],
    },
    {
      title: "SSC",
      company_name: "Viqarunnisa Noon School & College",
      icon: vnsc,
      iconBg: "#E6DEDD",
      date: "2017",
      points: [
    "I completed my SSC from Viqarunnisa Noon School and College, where I pursued a science background.",
     "GPA : Golden A+"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "This paper proposes an IoT-based system for automated product scanning and quality monitoring in shops, reducing labor costs and improving efficiency through real-time data access and streamlined operations.",
      name: "Fruit Quality Detection and Monitoring System",
      designation: "Research Paper Publications",
      company: "IEEE International Conference on (ICCSCE)",
      link: "https://ieeexplore.ieee.org/document/10237165",
    },
    {
      testimonial:
      "In the Supervised Machine Learning Regression and Classification course, I learnt how to build predictive models using various algorithms for regression and classification tasks. I also gained hands-on experience in data preprocessing, feature selection, and model evaluation techniques.",
      name: "Supervised Machine Learning: Regression and Classification",
      designation: "Coursera",
      company: "DEEP-Learning.AI",
      link: "https://coursera.org/share/22da3af702644ed2b87fa432a17c76a4",
    },
    {
      testimonial:
      "In the course Unsupervised Learning, Recommenders, Reinforcement Learning, I learned how unsupervised algorithms discover patterns in unlabeled data and how recommender systems personalize user experiences. I also explored reinforcement learning, where agents make sequential decisions to maximize rewards.",
      name: "Unsupervised Learning, Recommenders, Reinforcement Learning",
      designation: "Coursera",
      company: "DEEP-Learning.AI",
     link: "https://coursera.org/share/22da3af702644ed2b87fa432a17c76a4",
    },
    {
      testimonial:
        "In the course Structuring Machine Learning Projects, I learned how to organize and manage machine learning projects effectively by diagnosing errors, applying orthogonalization techniques, and prioritizing tasks to optimize model performance. The course also emphasized improving iterative processes for building and refining models.",
      name: "Structuring Machine Learning Projects",
      designation: "Coursera",
      company: "DEEP-Learning.AI",
      link: "https://coursera.org/share/7c9fe24ffc6ee2b2d4ba3213bc2edfb6",
    },
    {
      testimonial:
        "In the Advanced Learning Algorithms course, I learned to build and train neural networks using TensorFlow for multi-class classification, and apply decision tree and tree ensemble methods like random forests and boosted trees. The course also emphasized best practices for developing machine learning models that generalize effectively to real-world data and tasks.",
      name: "Advanced Learning Algorithms",
      designation: "Coursera",
      company: "DEEP-Learning.AI",
      link: "https://coursera.org/share/7c9fe24ffc6ee2b2d4ba3213bc2edfb6",
    },
    {
      testimonial:
        "In the Data Analysis and Visualization with Power BI course, I learned to transform raw data into meaningful insights by creating interactive dashboards and visual reports. I also mastered techniques for data modeling, cleansing, and performing advanced analytics using Power BI's powerful tools.",
      name: "Data Analysis and Visualization with Power BI",
      designation: "Coursera",
      company: "Microsoft",
      link: "https://coursera.org/share/349c6e24f1d98b28e6860f39b52f1d84",
    },
   

  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };