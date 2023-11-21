import type { ToolsState } from "./type"

export const getTools = (state: ToolsState) => {
    return state.tools
}

export const getTool = (state: ToolsState) => (id: string) => {
    return state.tools[id]
}
