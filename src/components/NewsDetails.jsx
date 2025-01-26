import { useParams } from "react-router";

const NewsDetails = (props) => {
    const params = useParams();
    console.log(params);
    
    return (
        <div>
            <h3>News Details</h3>
        </div>
    );
}

export default NewsDetails;