
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

export interface skill {
  "name": string,
  "show": jobs[],
  "value": number[],
  "description": string,
}

export interface resumeItem {
  name: string,
  time: [number, number],
  location: string,
  degree: string,
  text: string,
}

export interface CvState {
  products: [],
  product: null,
  social: social[],
  skills: skills[],
  resume: {
    education: resumeItem[],
    professional: resumeItem[],
  },
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