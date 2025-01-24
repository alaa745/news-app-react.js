import axios from "axios";
import ArticleModel from "../models/ArticleModel";
class NewsApiController {
    static baseUrl = "https://newsapi.org/v2/";
    static apiKey = "9614d10f335d4323b29a6246dead8f23";
    static topHeadlinesUrl = `${this.baseUrl}top-headlines?country=us&apiKey=${this.apiKey}`;

    static async fetchEveryThingNews(page) {
        const everythingUrl = `${this.baseUrl}everything?q=us+trump&page=${page}&apiKey=${this.apiKey}`;

        try {
            const response = await axios.get(everythingUrl);
            let articles = response.data.articles;
            return articles.map(article => new ArticleModel(
                article.title,
                article.author,
                article.description,
                article.url,
                article.urlToImage,
                article.publishedAt
            ));

        } catch (error) {
            console.log(error);

        }
    }

    static async fetchHeadlines() {
        try {
            const response = await axios.get(this.topHeadlinesUrl);
            let headlines = response.data.articles;

            return headlines.map((article) => new ArticleModel(
                article.title,
                article.author,
                article.description,
                article.url,
                article.urlToImage,
                article.publishedAt
            ));
        } catch (error) {
            console.log(error);
        }
    }
}

export default NewsApiController;