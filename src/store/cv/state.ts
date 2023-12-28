import { jobs, type CvState } from "./types"

const state: CvState = {
  products: [],
  product: null,
  social: [],
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