var React = require('react');

function show (obj){
    return (
        <pre>{JSON.stringify(obj, null, '\n')}</pre>
    )
}

var StartFight = function(props){
    return (
        <div>{props.isLoading?<p> LOADING </p>: <p> {show(props)} </p>}</div>
    )
};

module.exports = StartFight;