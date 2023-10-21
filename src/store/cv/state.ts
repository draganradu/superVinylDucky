import { type CvState } from "./types"

const state: CvState = {
  products: [],
  product: null,
  social: [],
  contact: {
    firstName: "Radu",
    lastName: "Dragan",
    cv: {
      "front": "front.pdf",
      "scrum": "scrum.pdf",
      "ui": "ui.pdf",
    },
    phone: "0648459980",
    email: "radu.dragan@vinylducky.nl",
  },
  jobs: {
    front: {
      "cv": "front.pdf",
      "video": "v57AUcd2eO0"
    },
    scrum: {
      "cv": "scrum.pdf",
      "video": "v57AUcd2eO0"
    },
    ui: {
      "cv": "ui.pdf",
      "video": "v57AUcd2eO0"
    },
  }

}

export default state