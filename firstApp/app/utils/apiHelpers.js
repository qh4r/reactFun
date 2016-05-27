var axios = require('axios');

function getUserInfo(username) {
    return axios.get('https://api.github.com/users/' + username)
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
    },
    getRepositories: function (userName) {
        return axios.get('https://api.github.com/users/' + userName + '/repos');
    },
    getStars: function (repos) {
        return repos.data.reduce(function(previous, current){
            return previous + current.stargazers_count;
        }, 0);
    },
    getPlayerData(player){
        return this.getRepositories(player.login)
            .then(function(repos){
                return this.getStars(repos);
            }.bind(this))
            .then(function(stars){
                return {
                    followers: player.followers,
                    stars: stars
                }
            });
    },
};


module.exports = apiHelpers;