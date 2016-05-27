var apiHelpers = require('./apiHelpers'),
    axios = require('axios');

var battleHelpers = function () {
    var fight = function (players) {
        return axios.all(players.map(function (player) {
                return apiHelpers.getPlayerData(player);
            }))
            .then(calculateScore)
            .catch(function (err) {
                console.warn('Error', err);
            });
    };

    var calculateScore = function (players) {
        return players.map(function (player) {
            return player.followers * 3 + player.stars;
        });
    };


    return {
        fight: fight
    };
};

module.exports = battleHelpers();