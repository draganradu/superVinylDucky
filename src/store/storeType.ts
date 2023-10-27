import { type CvState } from "./cv/types"
import type ShopState from "./shop/types"

export interface RootState {
  cv: CvState,
  shop: ShopState,
  tools: any,
  user: any,
}