import HorizontalSpacer from "./HorizontalSpacer";
import TopHedlineCard from "./TopHeadlineCard";

const TopHeadlinesSection = ({ headlines }) => {
    return (
        <div className="top-headlines col-4">
            <div className="d-flex justify-content-between" style={{ color: "black" }}>
                <h6>Trending Headlines</h6>
            </div>
            <HorizontalSpacer style={{ width: "100%", height: "2px", backgroundColor: "rgba(241, 240, 240, 1)" }} />
            {headlines.map((article , index) => (
                <TopHedlineCard article = {article} key={index}/>
            ))}
        </div>
    );
}

export default TopHeadlinesSection;