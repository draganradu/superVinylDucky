import type { productType } from "./prod/type"

export default interface ShopState {
  products: {
    [index: string]: productType;
  },
  socialMedia: { name: string, url: string }[],
  store: {
    markplaats: string;
    etsy: string;
  },
  contact: {
    phone: string,
    email: string,
    vat: string,
    kvk: string,
    iban: string,
    address: {
      street: string,
      number: string,
      postalCode: string,
      city: string,
      province: string
    }
  },
  logic: {
    isFullscreen: boolean
  }
}