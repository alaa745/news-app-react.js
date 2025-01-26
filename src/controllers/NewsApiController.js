import axios from "axios";
import ArticleModel from "../models/ArticleModel";
import axiosInstance from "../instances/axiosIntance";
class NewsApiController {
    static apiKey = "9614d10f335d4323b29a6246dead8f23";
    static topHeadlinesUrl = `top-headlines?country=us&apiKey=${this.apiKey}`;

    static async fetchEveryThingNews(page) {
        const everythingUrl = `everything?q=us+trump&page=${page}&apiKey=${this.apiKey}`;

        try {
            
            const response = await axiosInstance.get(everythingUrl);
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
            const response = await axiosInstance.get(this.topHeadlinesUrl);
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