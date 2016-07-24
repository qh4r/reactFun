var Fetch = require('whatwg-fetch'),
    rootUrl = 'https://api.imgur.com/3/',
    key = require('../imgurCredentials').id;

module.exports = {
    get: function (url) {
        return fetch(rootUrl + url, {
            headers: {
                Authorization: 'Client-ID ' + key,
                Accept: 'application/json'
            }
        }).then(function(res){
            return res.json();
        }).then(function(json){
            return json;
        });
    }
};
