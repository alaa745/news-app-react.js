const NewsPoster = ({ articles }) => {
    return (
        <div className="news-poster col-6">
            <img src={articles[5].urlToImage} alt="" />
            <div className="sub-news">
                <div>
                    <div style={{ fontSize: ".9rem", color: "black", fontWeight: "bold", "overflowX": "auto", "whiteSpace": "normal" }}>
                        {articles[3].title}
                    </div>
                    <div style={{ fontSize: ".75rem", color: "rgba(4, 89, 77, 1)", fontWeight: "light", "whiteSpace": "normal", paddingRight: "5px" }}>
                        {articles[3].description}
                    </div>
                </div>
                <img src={articles[3].urlToImage} alt="" style={{width: "140px" , height: "80px"}}/>
            </div>
        </div>
    );
};

export default NewsPoster;