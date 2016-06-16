var React = require('react');

module.exports = function(props){
    return (
        <button className="dropdown-toggle" onClick={props.onChangeState}>
            {props.children}
        </button>
    )
};