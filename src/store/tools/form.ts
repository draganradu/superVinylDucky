import type { toolType } from "./type"

export const formInitial: toolType = {
    ID: "",
    location: "",
    maker: "",
    model: "",
    description: "",
    EAN: "",
    extends: "",
    owner: "wjnCEzeiA4f6M75FeLMf6efZ8433",
  
    color: "",
    price: 50,
    currentMarketPrice: 98,
    retailPrice: 99,
  
    mods: [""],
    consumables: [""],
    images: ["1"],
    otherID: "",
    usedIn: [""],
    size: [0],
    weight: 0,
    purchaseDate: new Date(),
    usage: 1,
    repairs: [""],
    borrowed: [{ id: "", start: new Date(), end: new Date(), note: "" }],
  }