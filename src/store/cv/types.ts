
export enum jobs {
  front = "front",
  scrum = "scrum",
  ui = "ui",
}

export interface jobsData {
  "cv": string,
  "video": string
}

export interface social {
  "name": string,
  "url": string
  "icon": string,
  "show": jobs[]
}

export interface CvState {
  products: [],
  product: null,
  social: social[],
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
    [key in jobs]: jobsData
  }
}