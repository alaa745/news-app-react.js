import img from "../assets/images/img1.png";
import HorizontalSpacer from "./HorizontalSpacer";
const TopHedlineCard = ({ article }) => {
    return (
        <div>
            <div className="top-hedline-card">
                <img src={article.urlToImage} alt="" style={{ width: "160px", height: "100%" }} />
                <div className="top-headline-text">
                    <div style={{ fontSize: ".7rem", color: "black" , width: "100%" , height: "50px" , textOverflow:"ellipsis", whiteSpace: "wrap" , overflow: "hidden"}}>
                        {article.title}
                    </div>
                    <div style={{ fontSize: ".56rem", color: "rgba(4, 89, 77, 1)", height: "40px" , width: "100%"  , textOverflow:"ellipsis", whiteSpace: "wrap" , overflow: "hidden" }}>
                        {article.description}
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", color: "rgba(103, 103, 103, 1)", fontSize: ".5rem" }}>
                        <div>
                            By {article.author}
                        </div>
                        <div>
                            Feb. 5, 2023
                        </div>
                    </div>
                </div>

            </div>
            <HorizontalSpacer style={{ width: "100%", height: "2px", backgroundColor: "rgba(241, 240, 240, 1)", marginTop: "10px" }} />
        </div>

    );
}

export default TopHedlineCard;