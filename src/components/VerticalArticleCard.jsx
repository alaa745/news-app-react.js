import img3 from "../assets/images/img3.png";
import HorizontalSpacer from "./HorizontalSpacer";
const VerticalArticleCard = ({ article }) => {

    const style = {
        // width: "350px",
        height: "300px",
        backgroundImage: `url(${article.urlToImage})`, // Use imported image here
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "10px",
        margintop: "20px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }
    return (
        <div>
            {article.urlToImage ? (
                <div style={style}>
                    <div style={{ width: "80%", fontSize: "16px", color: "white", "overflowWrap": "break-word" }}>{article.title}</div>
                    <div style={{ display: "flex", color: "white", fontSize: "12px" }}>
                        <div style={{ marginRight: "10px" }}>{`By ${article.author}`}</div>
                        Feb. 4,2023
                    </div>
                </div>
            ) : (
                <div style={{ backgroundColor: "white", padding: "15px", height: "300px", display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                    <div style={{ width: "100%", fontSize: "17px", color: "black", fontWeight: "bold", "overflowWrap": "break-word" }}>{article.title}</div>

                    <div style={{ display: "flex", color: "rgba(103, 103, 103, 1)", fontSize: "12px" }}>
                        <div style={{ marginRight: "10px" }}>{`By ${article.author}`}</div>
                        Feb. 4,2023
                    </div>
                    <HorizontalSpacer style={{ width: "100%", height: "2px", backgroundColor: "rgba(241, 240, 240, 1)" }} />
                    <div style={{ width: "90%", fontSize: "16px", color: "rgba(4, 89, 77, 1)", "overflowWrap": "break-word" }}>{article.description}</div>
                </div>
            )
            }

        </div>
    );
}

export default VerticalArticleCard;