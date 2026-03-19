const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const SKILL_CATS = [
  { cat: "Programming Languages", items: [
    {n:"Python",ic:`${DI}/python/python-original.svg`},{n:"JavaScript",ic:`${DI}/javascript/javascript-original.svg`},{n:"C++",ic:`${DI}/cplusplus/cplusplus-original.svg`},
    {n:"Java",ic:`${DI}/java/java-original.svg`},{n:"C#",ic:`${DI}/csharp/csharp-original.svg`},{n:"SQL",ic:`${DI}/azuresqldatabase/azuresqldatabase-original.svg`},
    {n:"PHP",ic:`${DI}/php/php-original.svg`},{n:"Kotlin",ic:`${DI}/kotlin/kotlin-original.svg`},
  ]},
  { cat: "Frontend", items: [
    {n:"React",ic:`${DI}/react/react-original.svg`},{n:"React Native",ic:`${DI}/react/react-original.svg`},{n:"HTML5",ic:`${DI}/html5/html5-original.svg`},
    {n:"CSS3",ic:`${DI}/css3/css3-original.svg`},{n:"Tailwind CSS",ic:`${DI}/tailwindcss/tailwindcss-original.svg`},{n:"Bootstrap",ic:`${DI}/bootstrap/bootstrap-original.svg`},
  ]},
  { cat: "Backend & Database", items: [
    {n:"Node.js",ic:`${DI}/nodejs/nodejs-original.svg`},{n:"Express.js",ic:`${DI}/express/express-original.svg`},{n:"Nest.js",ic:`${DI}/nestjs/nestjs-original.svg`},
    {n:"Sequelize",ic:`${DI}/sequelize/sequelize-original.svg`},{n:"MySQL",ic:`${DI}/mysql/mysql-original.svg`},{n:"MongoDB",ic:`${DI}/mongodb/mongodb-original.svg`},
  ]},
  { cat: "Data Science & ML", items: [
    {n:"TensorFlow",ic:`${DI}/tensorflow/tensorflow-original.svg`},{n:"PyTorch",ic:`${DI}/pytorch/pytorch-original.svg`},{n:"Keras",ic:`${DI}/keras/keras-original.svg`},
    {n:"Scikit-learn",ic:`${DI}/scikitlearn/scikitlearn-original.svg`},{n:"Pandas",ic:`${DI}/pandas/pandas-original.svg`},{n:"NumPy",ic:`${DI}/numpy/numpy-original.svg`},
    {n:"Matplotlib",ic:`${DI}/matplotlib/matplotlib-original.svg`},{n:"Apache Spark",ic:`${DI}/apachespark/apachespark-original.svg`},
  ]},
  { cat: "Visualization & Tools", items: [
    {n:"Power BI",ic:"https://img.icons8.com/color/48/power-bi-2021.png"},{n:"Tableau",ic:"https://img.icons8.com/color/48/tableau-software.png"},
    {n:"Git",ic:`${DI}/git/git-original.svg`},{n:"GitHub",ic:`${DI}/github/github-original.svg`},
    {n:"Linux",ic:`${DI}/linux/linux-original.svg`},{n:"Postman",ic:`${DI}/postman/postman-original.svg`},{n:"VS Code",ic:`${DI}/vscode/vscode-original.svg`},
  ]},
];

export const PROJECTS = [
  { title:"Full Therapy Platform", sub:"Full Stack & Mobile App", org:"Faculty of Public Health, IUL", period:"Apr – Jul 2024",
    desc:"A comprehensive therapy platform built with React frontend, Node.js/Sequelize backend, and React Native Expo mobile app.",
    descDe:"Eine umfassende Therapieplattform mit React-Frontend, Node.js/Sequelize-Backend und React Native Expo Mobile App.",
    tech:["React","Node.js","Sequelize","React Native","Expo"], color:"#4a6fa5", pastel:"#e8edf5", darkPastel:"#1a2540",
    link:"https://raise-lab.com/" },
  { title:"ML & Deep Learning Suite", sub:"Machine Learning Projects", org:"Udemy Certification", period:"Feb – Apr 2022",
    desc:"Built image and sentiment classifiers using TensorFlow/Keras. Applied regression, SVM, KNN, and decision trees. Deployed ML models with Flask.",
    descDe:"Bild- und Stimmungsklassifikatoren mit TensorFlow/Keras erstellt. Regression, SVM, KNN und Entscheidungsbäume angewendet. ML-Modelle mit Flask bereitgestellt.",
    tech:["Python","TensorFlow","Keras","Flask","Scikit-learn"], color:"#c9a84c", pastel:"#f5eedc", darkPastel:"#2a2415",
    link:"https://github.com/aessayed/predicttheapple-" },
  { title:"Mehnati.org Platform", sub:"MERN Stack Application", org:"Salem Group", period:"Oct 2023 – Jan 2024",
    desc:"Full-stack MERN application with robust backend logic, MySQL and MongoDB databases, and tested APIs with Postman.",
    descDe:"Full-Stack MERN-Anwendung mit robuster Backend-Logik, relationale und nicht-relationale Datenbanken mit MySQL und MongoDB.",
    tech:["MongoDB","Express.js","React","Node.js","MySQL"], color:"#6b8f71", pastel:"#eaf2eb", darkPastel:"#152218",
    link:"https://mehnati.org" },
  { title:"Responsive Web Interfaces", sub:"Frontend Development", org:"Independent Projects", period:"2022 – 2023",
    desc:"Designed responsive interfaces using Bootstrap's grid system with predefined UI components for consistent layout development.",
    descDe:"Responsive Benutzeroberflächen mit Bootstrap-Gridsystem und vordefinierten UI-Komponenten für schnelle und konsistente Layoutentwicklung.",
    tech:["HTML","CSS","Bootstrap","JavaScript","React"], color:"#94607a", pastel:"#f3eaef", darkPastel:"#251520",
    link:"https://watcheswithrolex.netlify.app/" },
];

export const EXPERIENCE = [
  { role:"MSc. Data Analytics", place:"Stiftung Universität Hildesheim, Germany", period:"Apr 2025 – Present", details:"Machine Learning, Big Data Analytics, Distributed Data Analytics, Information Ethics", detailsDe:"Maschinelles Lernen, Big Data Analytics, Verteilte Datenanalyse, Informationsethik", type:"education" },
  { role:"BSc. Computer Science", place:"Islamic University of Lebanon", period:"Oct 2021 – Jul 2024", details:"GPA: 3.13/4 — Participated in the CS CBI program from Réseau Figure (France)", detailsDe:"GPA: 3.13/4 — Teilnahme am Informatik CBI-Programm von Réseau Figure (Frankreich)", type:"education" },
  { role:"MERN Stack Developer", place:"Salem Group (mehnati.org)", period:"Oct 2023 – Jan 2024", details:"Full-stack development with Node.js, MySQL, MongoDB. Built and deployed production applications.", detailsDe:"Full-Stack-Entwicklung mit Node.js, MySQL, MongoDB. Produktionsanwendungen erstellt und bereitgestellt.", type:"work" },
  { role:"Front-End Developer", place:"Salem Group", period:"Jul 2022 – Oct 2022", details:"React development, responsive UIs with Bootstrap & Tailwind CSS, collaborative Git workflows.", detailsDe:"React-Entwicklung, responsive UIs mit Bootstrap & Tailwind CSS, kollaborative Git-Workflows.", type:"work" },
];

export const LANGS = [
  { name:"Arabic", nameDE:"Arabisch", level:"Native", levelDe:"Muttersprache", pct:100 },
  { name:"English", nameDE:"Englisch", level:"Advanced", levelDe:"Fortgeschritten", pct:90 },
  { name:"French", nameDE:"Französisch", level:"Intermediate", levelDe:"Mittelstufe", pct:60 },
  { name:"German", nameDE:"Deutsch", level:"Beginner", levelDe:"Anfänger", pct:25 },
];

export const NAV = ["Home","About","Skills","Projects","Journey","Contact"];
