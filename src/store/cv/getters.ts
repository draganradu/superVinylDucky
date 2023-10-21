export const is = (state: any) => (jobName: string) => {
    return Object.keys(state.jobs).reduce((accumulator, currentValue) => {
        return { ...accumulator, [currentValue]: (jobName === currentValue) }
    }, {})
} 