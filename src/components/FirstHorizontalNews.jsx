import img3 from "../assets/images/img3.png"
const FirstHorizontalNews = ({articles}) => {
    return (
        <div className="first-horiz-news">
            <div style={{fontSize: ".6rem" , width: "50%" , fontWeight: "light", "overflow": "normal", "whiteSpace": "normal", paddingRight: "5px", color: "white" }}>
                {articles[17].description}
            </div>
            <img src= {articles[17].urlToImage} style={{height: "100%" , width: "50%"}}/>
        </div>
    );
}

export default FirstHorizontalNews;