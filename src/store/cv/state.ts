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