const iconMapping = (name: string) => {
  const iconList: any = {
    "none": "bi-bezier2",
    "facebook": "bi-facebook",
    "linkedin": "bi-linkedin",
    "instagram": "bi-instagram",
  }

  return iconList[name] || iconList["none"];
}

export const getSocialLinks = (state: any) => {
  return state.socialMedia.map((x: any) => { return { ...x, icon: iconMapping(x.name) } });
}

export const getProductsGrid = (state: any) => {
  return state.products;
}

export const getProduct = (state: any) => (product: string) => {
  return state.products[product];
}