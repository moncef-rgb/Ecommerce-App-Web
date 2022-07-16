import Api from "../Axios/Api";
const ARTICLE_API = "/articles"

const fetchArticles = async () => {
    const token = localStorage.CC_Token
    console.log(token);
    return await Api.get(ARTICLE_API, {
        headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + token
        }
    });
}
const fetchArticleById = async (articleId) => {
    return await Api.get(ARTICLE_API + '/' + articleId);
}
const deleteArticle = async (articleId) => {
    return await Api.delete(ARTICLE_API + '/' + articleId);
}
const addArticle = async (article) => {
    return await Api.post("" + ARTICLE_API, article);

}
const editArticle = (article) => {
    return Api.put(ARTICLE_API + '/' + article._id, article);

}
// const fetchArticleByCat=async(catId)=> {
//     return await Api.get(ARTICLE_API + '/affparcat/' + catId);

//     }   
const ArticleService = {
    fetchArticles,
    fetchArticleById,
    deleteArticle,
    addArticle,
    editArticle
    //fetchArticleByCat
}

export default ArticleService;