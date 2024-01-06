// data -----------------------------------------
export const editItem:EditItem = {
  title: "",
  en: { description: "", name: "" },
  nl: { description: "", name: "" },
  buyLink: "",
  category: ["sticker"],
  colors: ["black"],
  img: [""],
  material: "Oracal 651",
  price: 0,
  size: [0, 0],
  devOnly: false,
  printReverse: false,
}

// type  -----------------------------------------
export interface languageData {
  description: string,
  name: string,
}
export interface EditItem {
  title: string,
  en: languageData,
  nl: languageData,
  buyLink: string,
  category: string[],
  colors: string[]
  img: string[],
  material: string,
  price: number,
  size: [number, number],
  devOnly: boolean,
  printReverse?: boolean,
}

// methods --------------------------------------

export const formHelper = {
  toString: (formStructure: any) => {
    return Object.keys(formStructure).reduce((acc: any, key: string) => {
      if (Array.isArray((editItem as any)[key])) {
        return { ...acc, [key]: formStructure[key].join(', ') }
      } else {
        return { ...acc, [key]: formStructure[key] }
      }
    }, {})
  },
  toObject: (formStructure: any) => {

    const normalObject = Object.keys(formStructure).reduce((acc: any, key: string) => {
      // Is Array
      if (Array.isArray((editItem as any)[key])) {
        const newArray = formStructure[key].replaceAll(/(\s){0,10},(\s){0,10}/g, ',').split(',')
        // is numberArray
        if (typeof (editItem as any)[key][0] === 'number') {
          return {
            ...acc,
            [key]: newArray.map((i: string) => Number(i))
          }
        } else {
          // is stringArray
          return {
            ...acc,
            [key]: newArray
          }
        }
      } else {
        // Is number
        if (typeof (editItem as any)[key] === 'number') {
          return {
            ...acc,
            [key]: Number(formStructure[key])
          }
        } else {
          // Is string
          return {
            ...acc,
            [key]: formStructure[key]
          }
        }
      }
    }, {})
    return normalObject
  },
}

