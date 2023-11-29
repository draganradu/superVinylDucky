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

interface personalTools extends abstractTools {
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

interface publicTool extends abstractTools {
    EAN: string,
    retailPrice: number,

}

type toolType = personalTools & publicTool;

interface groupToolType {
    [key: string]: toolType;
}

interface ToolsState {
    tools: groupToolType[]
}

export enum dbCollections {
    PersonalTools = "PersonalTools",
    PublicTools = "PublicTools",
    storeProducts = "storeProducts",
}

export type { ToolsState, toolType, publicTool, personalTools, groupToolType } 