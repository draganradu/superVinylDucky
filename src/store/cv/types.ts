
export enum jobs {
  front = "front",
  scrum = "scrum",
  ui = "ui",
}

export interface CvState {
  products: [],
  product: null,
  social: [],
  contact: {
    firstName: string,
    lastName: string,
    cv: {
      [key in jobs]: string
    },
    phone: string,
    email: string,
  },
  jobs: {
    [key in jobs]: {
      "cv": string,
      "video": string
    }
  }
}