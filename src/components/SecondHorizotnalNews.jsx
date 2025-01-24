import img4 from "../assets/images/img4.png"
const SecondHorizontalNews = ({ articles }) => {
    return (
        <div className="second-horiz-news">
            <img src={articles[6].urlToImage} alt="" style={{ height: "100%"  , width: "40%"}} />
            <div className="vertical-spacer"></div>
            <div style={{ padding: "10px", display: "flex", flexDirection: "column", justifyContent: "space-evenly", height: "100%" }}>
                <div style={{ fontSize: "1rem", fontWeight: "bold", color: "black" }}>
                    {articles[6].title}
                </div>
                <div style={{ display: "flex", fontSize: "10px" }}>
                    <div style={{ color: "rgba(103, 103, 103, 1)" }}>By {articles[3].author}</div>
                    <div style={{ color: "rgba(103, 103, 103, 1)", marginLeft: "20px" }}>Feb. 4, 2023</div>
                </div>
                <div className="horiz-spacer"></div>
                <div style={{ color: "rgba(4, 89, 77, 1)", fontSize: ".8rem", "overflowX": "auto", "whiteSpace": "normal" }}>
                    {articles[6].description}
                </div>
            </div>
        </div>
    );
}

export default SecondHorizontalNews;