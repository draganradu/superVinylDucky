export const setProducts = (state: any, payload: any) => {
  state.products = payload
}

export const setProduct = (state: any, payload: any) => {
  state.products[payload.title] = payload
}


export const removeProduct = (state: any, payload: string) => {
  delete state.products[payload]
}


export const toggleFullScreen = (state: any) => {
  state.logic.isFullscreen = !state.logic.isFullscreen
}

export const setHeroImg = (state: any, payload: { product: string, img: string }) => {
  let newImages = state.products[payload.product].img.filter((x: string) => { return x !== payload.img })
  newImages = [payload.img, ...newImages]
  state.products[payload.product].img = newImages
}
