var React = require('react');

var PlayerDetails = function (props) {
    var user = props.user;
    return (
        <div>
            {!!props.score && <li className="list-group-item"><h3>Wynik: {props.score}</h3></li>}
            <li className="list-group-item">
                <img src={user.avatar_url} className="img-rounded img-responsive"/>
            </li>
            {user.name && <li className="list-group-item"> Imie: {user.name}</li>}
            <li className="list-group-item">Nick: {user.login}</li>
            {user.location && <li className="list-group-item">Pochodzenie: {user.location}</li>}
            {user.company && <li className="list-group-item">Firma: {user.company}</li>}
            <li className="list-group-item">Śledzący: {user.followers}</li>
            <li className="list-group-item">Śledzeni: {user.following}</li>
            <li className="list-group-item">Repozytoria: {user.public_repos}</li>
            {user.blog && <li className="list-group-item">Blog: <a href={user.blog}>{user.blog}</a></li>}
        </div>
    )
};

PlayerDetails.propTypes = {
    score: React.PropTypes.number,
    user: React.PropTypes.shape({
        avatar_url: React.PropTypes.string.isRequired,
        blog: React.PropTypes.string,
        company: React.PropTypes.string,
        followers: React.PropTypes.number.isRequired,
        following: React.PropTypes.number.isRequired,
        location: React.PropTypes.string,
        login: React.PropTypes.string.isRequired,
        name: React.PropTypes.string,
        public_repos: React.PropTypes.number.isRequired,
    })
};

module.exports = PlayerDetails;