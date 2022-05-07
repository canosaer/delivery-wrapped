const reducer = (state, action) => {
    switch(action.type) {
        case 'UPDATE_CURRENT':
            return {
                ...state,
                current: action.payload
            }
        default:
            return state
    }
}

export default reducer