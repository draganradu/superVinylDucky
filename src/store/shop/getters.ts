import type ShopState from "./types"

const iconMapping = (name: string) => {
  const iconList: any = {
    "none": "bi-bezier2",
    "facebook": "bi-facebook",
    "linkedin": "bi-linkedin",
    "instagram": "bi-instagram",
  }

  return iconList[name] || iconList["none"]
}

export const getSocialLinks = (state: ShopState) => {
  return state.socialMedia.map((x: any) => { return { ...x, icon: iconMapping(x.name) } })
}

export const getProductsGrid = (state: ShopState) => {
  return state.products
}

export const getLogic = (state: ShopState) => {
  return state.logic
}

export const getAllCategory = (state: ShopState) => {
  const grids = Object.keys(state.products).reduce((accumulator: any, current: any) => {
    const category = state.products[current].category
    if (category) {
      return [...new Set([...accumulator, ...Object.values(category)])]
    }
    return accumulator
  }, [])
  return grids || []
}

export const getProduct = (state: ShopState) => (product: string) => {
  return state.products[product]
}