// data -----------------------------------------
export const editItem = {
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
    return formStructure
  },
}

