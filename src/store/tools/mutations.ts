import type { ToolsState, toolType } from "./type"

export const setTools = (state: ToolsState, payload: toolType[]) => {
    return state.tools = payload
}

export const editTool = (state: ToolsState, payload: toolType) => {
    return state.tools = payload
}
