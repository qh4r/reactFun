var React = require('react');

var StartFight = function(props){
    return (
        <div>{props.isLoading?<p> LOADING </p>: <p> NOT LOADING </p>}</div>
    )
};

module.exports = StartFight;