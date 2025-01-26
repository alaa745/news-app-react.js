const initialState = {
    articles: [],
    headlines: []
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
        default:
            return state;
    }
}