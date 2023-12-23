interface abstractTools {
    color?: string,
    currentMarketPrice: number,
    consumables?: string[],
    description?: string,
    images?: string[]
    maker?: string,
    model?: string,
    otherID?: string,
    usedIn: string[],
    private?: {
        personalToolID?: string,
        publicToolID?: string,
    },
    size: number[]
    weight?: number,
}

export interface personalTools extends abstractTools {
    ID: string
    owner: string,
    extends?: string,
    price: number,
    mods: string[],
    purchaseDate: Date,
    usage: number, // usage per year (365 every day/ 1 once per year )
    repairs?: string[],
    borrowed?: { id: string, start: Date, end: Date, note: string }[]
    location: string
}

export interface publicTool extends abstractTools {
    EAN: string,
    retailPrice: number,

}

export type toolType = personalTools & publicTool;

export interface groupToolType {
    [key: string]: toolType;
}

export interface ToolsState {
    tools: groupToolType
}

export enum dbCollections {
    PersonalTools = "PersonalTools",
    PublicTools = "PublicTools",
    storeProducts = "storeProducts",
}
