import type { ToolsState, groupToolType, toolType } from "./type"

export const setTools = (state: ToolsState, payload: groupToolType) => {
    return state.tools = payload
}

export const editTool = (state: ToolsState, payload: toolType) => {
    //TODO ECBGI-77 [this is wrong]
    console.log(state, payload)
    // return state.tools = payload
}
