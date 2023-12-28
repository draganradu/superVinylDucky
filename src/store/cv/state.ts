import { jobs, type CvState } from "./types"

const state: CvState = {
  products: [],
  product: null,
  social: [
    {
      "name": "Linkedin",
      "url": "",
      "icon": "linkedin",
      "show": [jobs.front, jobs.ui, jobs.scrum]
    },
    {
      "name": "Github",
      "url": "",
      "icon": "github",
      "show": [jobs.front]
    },
    {
      "name": "Behance",
      "url": "",
      "icon": "behance",
      "show": [jobs.ui]
    },
    {
      "name": "Instagram",
      "url": "",
      "icon": "instagram",
      "show": [jobs.ui]
    },
    {
      "name": "Thingiverse",
      "url": "",
      "icon": "bandaid",
      "show": [jobs.ui]
    },
    {
      "name": "email",
      "url": "mailto:radu.dragan@vinylducky.nl",
      "icon": "envelope-paper-heart",
      "show": [jobs.front, jobs.ui, jobs.scrum]
    },
    {
      "name": "WhatsApp",
      "url": "https://wa.me/+31648459980",
      "icon": "whatsapp",
      "show": [jobs.front, jobs.ui, jobs.scrum]
    },
  ],
  skills: [
    {
      "name": "HTML5",
      "show": [jobs.front, jobs.ui],
      "value": [70, 100],
      "description": "I have started my carrer as a web developer with HTML4.1, in 2006. Since then I have been working with HTML5 and I have a good understanding of the semantic tags and the best practices. I have also worked with HTML5 canvas and SVGs. I have a good understanding of the accessibility standards and I have worked with screen readers and other assistive technologies. I have also worked with HTML5 video and audio tags and I have a good understanding of the best practices for embedding media content on the web."
    },
    {
      "name": "Scss (CSS3)",
      "show": [jobs.front, jobs.ui,],
      "value": [50, 100],
      "description": "I have been working with CSS3 since 2010. I have a good understanding of the best practices and I have worked with CSS3 animations and transitions. I have a good understanding of the responsive design and I have worked with media queries. I have also worked with CSS3 preprocessors like SASS and LESS."
    },
    {
      "name": "Javascript",
      "show": [jobs.front],
      "value": [90, 100],
      "description": "I have been working with Javascript since 2006. I have a good understanding of the best practices and I have worked with ES6 and Typescript. I have a good understanding of the asynchronous programming and I have worked with promises and async/await. I have also worked with Javascript frameworks like Vue and React. I have a good understanding of the Javascript design patterns and I have worked with the MVC and MVVM patterns. I have also worked with Javascript libraries like jQuery and I have a good understanding of the DOM manipulation. I have also worked with Javascript testing frameworks like Jest and Mocha."
    },
    {
      "name": "Typescript",
      "show": [jobs.front,],
      "value": [80, 100],
      "description": "I have been working with Typescript since 2018. I have a good understanding of the best practices and I have worked with Typescript in Vue and React projects. I have a good understanding of the asynchronous programming and I have worked with promises and async/await. I have also worked with Typescript testing frameworks like Jest and Mocha."
    },
    {
      "name": "Vue3",
      "show": [jobs.front],
      "value": [80, 100],
      "description": "I have been working with Vue since 2018. I have a good understanding of the best practices and I have worked with Vue3 and VueX. I have a good understanding of the asynchronous programming and I have worked with promises and async/await. I have also worked with Vue testing frameworks like Jest and Mocha."
    },
    {
      "name": "Jest",
      "show": [jobs.front],
      "value": [80, 100],
      "description": "I have been working with Vue since 2018. I have a good understanding of the best practices and I have worked with Vue3 and VueX. I have a good understanding of the asynchronous programming and I have worked with promises and async/await. I have also worked with Vue testing frameworks like Jest and Mocha."
    },
    {
      "name": "React",
      "show": [jobs.front],
      "value": [80, 100],
      "description": "I have been working with React since 2018. I have a good understanding of the best practices and I have worked with React and Redux. I have a good understanding of the asynchronous programming and I have worked with promises and async/await. I have also worked with React testing frameworks like Jest and Mocha."
    },

    {
      "name": "NodeJS",
      "show": [jobs.front],
      "value": [80, 100],
      "description": "I have been working with NodeJS since 2018. I have a good understanding of the best practices and I have worked with NodeJS and Express. I have a good understanding of the asynchronous programming and I have worked with promises and async/await. I have also worked with NodeJS testing frameworks like Jest and Mocha."
    },
    {
      "name": "PHP6",
      "show": [jobs.front],
      "value": [80, 100],
      "description": "I have been working with PHP since 2008. I have a good understanding of the best practices and I have worked with PHP and Laravel. I have a good understanding of the asynchronous programming and I have worked with promises and async/await. I have also worked with PHP testing frameworks like Jest and Mocha."
    },
    {
      "name": "MySQL",
      "show": [jobs.front, jobs.scrum],
      "value": [80, 100],
      "description": "I have been working with Git since 2006. I have a good understanding of the best practices and I have worked with Git and Github. I have a good understanding of the asynchronous programming and I have worked with promises and async/await. I have also worked with Git testing frameworks like Jest and Mocha."
    },
    {
      "name": "Firebase",
      "show": [jobs.front,],
      "value": [80, 100],
      "description": "I have been working with Git since 2006. I have a good understanding of the best practices and I have worked with Git and Github. I have a good understanding of the asynchronous programming and I have worked with promises and async/await. I have also worked with Git testing frameworks like Jest and Mocha."
    },
    {
      "name": "Git",
      "show": [jobs.front, jobs.ui, jobs.scrum],
      "value": [80, 100],
      "description": "I have been working with Git since 2006. I have a good understanding of the best practices and I have worked with Git and Github. I have a good understanding of the asynchronous programming and I have worked with promises and async/await. I have also worked with Git testing frameworks like Jest and Mocha."
    },
    {
      "name": "Agile Scrum (PSM I)",
      "show": [jobs.scrum],
      "value": [80, 100],
      "description": "I have been working with Safe 6.0 since 2018. I have a good understanding of the best practices and I have worked with Safe 6.0 and Jira. I have a good understanding of the asynchronous programming and I have worked with promises and async/await. I have also worked with Safe 6.0 testing frameworks like Jest and Mocha."
    },
    {
      "name": "Jira",
      "show": [jobs.scrum],
      "value": [80, 100],
      "description": "I have been working with Safe 6.0 since 2018. I have a good understanding of the best practices and I have worked with Safe 6.0 and Jira. I have a good understanding of the asynchronous programming and I have worked with promises and async/await. I have also worked with Safe 6.0 testing frameworks like Jest and Mocha."
    },
    {
      "name": "Safe 6.0",
      "show": [jobs.scrum],
      "value": [80, 100],
      "description": "I have been working with Safe 6.0 since 2018. I have a good understanding of the best practices and I have worked with Safe 6.0 and Jira. I have a good understanding of the asynchronous programming and I have worked with promises and async/await. I have also worked with Safe 6.0 testing frameworks like Jest and Mocha."
    },
    {
      "name": "Abobe XD",
      "show": [jobs.ui, jobs.scrum],
      "value": [50, 70],
      "description": "I have been working with Safe 6.0 since 2018. I have a good understanding of the best practices and I have worked with Safe 6.0 and Jira. I have a good understanding of the asynchronous programming and I have worked with promises and async/await. I have also worked with Safe 6.0 testing frameworks like Jest and Mocha."
    },
  ],
  contact: {
    firstName: "Radu",
    lastName: "Dragan",
    cv: {
      [jobs.front]: "front.pdf",
      [jobs.scrum]: "scrum.pdf",
      [jobs.ui]: "ui.pdf",
    },
    phone: "0648459980",
    email: "radu.dragan@vinylducky.nl",
  },
  jobs: {
    [jobs.front]: {
      "cv": "front.pdf",
      "video": "v57AUcd2eO0"
    },
    [jobs.scrum]: {
      "cv": "scrum.pdf",
      "video": "v57AUcd2eO0"
    },
    [jobs.ui]: {
      "cv": "ui.pdf",
      "video": "v57AUcd2eO0"
    },
  }

}

export default state