const setProducts = (state: any, payload: any) => {
    state.products =  payload
}

const toggleFullScreen = (state: any) => {
    state.logic.isFullscreen =  !state.logic.isFullscreen
}

const setHeroImg = (state: any, payload: {product: string, img: string}) => {
    let newImages = state.products[payload.product].img.filter((x: string) => { return x !== payload.img })
    newImages = [payload.img, ...newImages ]
    state.products[payload.product].img = newImages
}

export { setProducts, toggleFullScreen, setHeroImg }