import axios from "axios";

export default {
    getReactions: function() {
        return axios.get("/api/reactions");
    },
    getReaction: function(id) {
        return axios.get("/api/reactions/" + id);
    },
    deleteReaction: function(id) {
        return axios.delete("/api/reactions/" + id);
    },
    postReaction: function(postBody) {
        return axios.post("/api/reactions", postBody);
    },
    updateReaction: function(id) {
        return axios.put("/api/reactions/" + id);
    },
    getSentiments: function() {
        return axios.get("/api/sentiments");
    },
    getSentiment: function(id) {
        return axios.get("/api/sentments/" + id);
    },
    postSentiment: function(id, postBody) {
        return axios.post("/api/sentiments/" + id, postBody);
    },
    updateSentiment: function(id) {
        return axios.put("/api/sentiments/" + id);
    },
    deleteSentiment: function(id) {
        return axios.delete("/api/sentiments/" + id);
    },
    createUser: function(userData) {
        return axios.post("/api/users/signup", userData);
    },
    userLogin: function() {
        return axios.post("/api/users/login");
    },
    userLogout: function() {
        return axios.get("/api/users/logout");
    },
    getUsers: function() {
        return axios.get("/api/users");
    },
    getUser: function(id) {
        return axios.get("/api/users/" + id);
    },
    updateUser: function(id) {
        return axios.put("/api/users/" + id);
    },
    removeUser: function(id) {
        return axios.delete("/api/users/" + id);
    },
    getStocks: function(stock) {
        return axios.request({
            method: 'GET',
            url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary',
            params: {symbol: stock, region: 'US'},
            headers: {
              'x-rapidapi-key': '698dd4c269msh724d7908fe6467ep1c31ecjsn2ac3b2cb4005',
              'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
            }
          })
    },
    getTrendingStories: function() {
        return axios.get("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=2MlxruKUsf94PqwoSGi3oOM3YvCl1Gab")
    },
    // getStockChart: function() {
    //     return axios.get("")
    // }
};