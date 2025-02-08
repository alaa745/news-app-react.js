export  function setArticles(data) {
    return {
        type: "SET_ARTICLES",
        payLoad: data
    };
}
export function setSearchQuery(data){
    return {
        type: "SET_SEARCH",
        payLoad: data
    }
}
export  function setHeadlines(data) {
    return {
        type: "SET_HEADLINES",
        payLoad: data
    };
}