const initialState = {
    articles: [],
    headlines: [],
    searchQuery: "",
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "SET_ARTICLES":
            return {
                ...state,
                articles: action.payLoad
            };
        case "SET_HEADLINES":
            return {
                ...state,
                headlines: action.payLoad
            };
        case "SET_SEARCH":
            return {
                ...state,
                searchQuery: action.payLoad
            }
        default:
            return state;
    }
}