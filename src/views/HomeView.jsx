import { use, useCallback, useEffect, useState } from "react";
import FirstHorizontalNews from "../components/FirstHorizontalNews";
import FirstNav from "../components/FirstNav";
import HorizontalSpacer from "../components/HorizontalSpacer";
import NewsPoster from "../components/NewsPoster";
import SecondHorizontalNews from "../components/SecondHorizotnalNews";
import SecondNav from "../components/SecondNav";
import NewsApiController from "../controllers/NewsApiController";
import VerticalArticleCard from "../components/VerticalArticleCard";
import Footer from "../components/Footer";
import TopHeadlinesSection from "../components/TopHeadlinesSection";
import { useDispatch, useSelector } from "react-redux";
import { setArticles, setSearchQuery } from "../redux/actions";
import { setHeadlines } from "../redux/actions";

const HomeView = () => {
    // const [articles, setArticles] = useState([]);
    const articles = useSelector((state) => state.articles);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [Error, setError] = useState(null);

    // const [headlines, setHeadlines] = useState([]);
    const headlines = useSelector((state) => state.headlines);
    const [isHeadlinesLoading, setIsHeadlinesLoading] = useState(true);
    const [headlinesError, setHeadlinesError] = useState(null);
    const [page, setPage] = useState(1);
    console.log(articles);


    const fetchEveryThingNews = useCallback(async () => {
        try {
            let articlesList = await NewsApiController.fetchEveryThingNews(page);
            setPage((previousPage) => previousPage + 1);
            dispatch(setArticles([
                ...articles,
                ...articlesList
            ]));
            // setArticles([
            //     ...articles,
            //     ...articlesList
            // ]);

        } catch (error) {
            console.log(error);
            setError(error)
        } finally {
            setIsLoading(false);
        }
    }, [articles]);

    const fetchHeadlines = useCallback(async () => {
        try {
            const headlinesList = await NewsApiController.fetchHeadlines();
            // setHeadlines(headlinesList);
            dispatch(setHeadlines(headlinesList));
        } catch (error) {
            setHeadlinesError(error);
        } finally {
            setIsHeadlinesLoading(false);
        }
    }, [headlines]);

    useEffect(() => {
        console.log("useEffect");

        fetchEveryThingNews();
        fetchHeadlines();
    }, []);

    const searchNews = async (query) => {
        console.log(query);

        let searchResults = await NewsApiController.fetchEveryThingNews(page, query);
        setPage((previousPage) => previousPage + 1);

        dispatch(setArticles(
            searchResults
        ))
    }
    return (
        <div className="main-wrapper">
            {
                !isLoading && !isHeadlinesLoading &&
                <div className="first-section ">
                    <div >
                        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", width: "100vw" }}>
                            <div style={{ width: "80%" }}>
                                <FirstNav searchNews={searchNews} />
                                <SecondNav />
                                <div style={{ height: "100%", width: "100%" }}>
                                    <div className="first-news-section col-lg-12 col-md-12">
                                        <NewsPoster articles={articles} />
                                        <div className="col-6 second-news-section">
                                            <FirstHorizontalNews articles={articles} />
                                            <SecondHorizontalNews articles={articles} />
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between col-md-12 mt-3" >
                                        <div className="col-lg-8 col-md-12" style={{ color: "black" }}>
                                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                                <h4 style={{ whiteSpace: "nowrap", paddingRight: "20px" }}>Latest News</h4>
                                                <HorizontalSpacer style={{ backgroundColor: "black", marginRight: "10px", height: "2px", width: "100%" }} />
                                            </div>
                                            <div className="news-container">
                                                {articles.map((article, index) => (
                                                    <VerticalArticleCard article={article} key={index} />
                                                ))}
                                            </div>
                                            <div className="d-flex justify-content-center w-100 mt-3">
                                                <button className="view-more-btn" onClick={() => fetchEveryThingNews()}>View More</button>
                                            </div>
                                        </div>
                                        <TopHeadlinesSection headlines={headlines} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>

            }

        </div>
    );
}

export default HomeView;