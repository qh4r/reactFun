var axios = require('axios');

function getUserInfo(username) {
    return axios.get('https:api.github.com/users/' + username)
}

var apiHelpers = {
    getUsersInfo: function (players) {
        if (players && players.length) {
            //AXIOS ALL TO JAK Q.All
            return axios.all(players.map(function (username) {
                return getUserInfo(username);
            })).then(function (info) {
                return info.map((item)=> {
                    return item.data;
                });
            }).catch(function (err) {
                console.warn('Error', err);
            });
        }
    }
};

module.exports = apiHelpers;