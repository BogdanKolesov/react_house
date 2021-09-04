const initialState = {
    value: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'VALUE_CHANGED':
            return {
                ...state,
                menu: action.payload
            };

        default:
            return state;
    }
}

export default reducer;