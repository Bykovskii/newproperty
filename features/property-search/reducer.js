const initialState = {
    items: [],
};

export const propertySearchReducer = (state, action = {}) => {
    const currentState = state || initialState;
    const { type, payload } = action;

    switch (type) {
        case "SEARCH_PROPERTIES_SUCCESS":
            return { ...state, ...payload };
        case "CLEAR_PROPERTY_SEARCH_RESULTS":
            return initialState;
        default:
            return currentState;
    }
};