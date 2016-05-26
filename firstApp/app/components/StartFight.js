var React = require('react');

//function show (obj){
//    return (
//        <pre>{JSON.stringify(obj, null, '\n')}</pre>
//    )
//}
//
//var StartFight = function(props){
//    return (
//        <div>{props.isLoading?<p> LOADING </p>: <p> {show(props)} </p>}</div>
//    )
//};

//ODPOWIEDNIK FUNKCYJNY u GORY
//NA DOLE KOMPONENT
//NAZWY KOMPONENTOW MUSZA ZACZYNAC SIE OD DUZEJ LITERY!!!!!

var Show = function (obj) {
    return (
            <pre>{JSON.stringify(obj, null, '\n')}</pre>
    )
}

var StartFight = function (props) {
    return (
        <div>{props.isLoading ? <p> LOADING </p> :
            <Show data={props}></Show>
        }</div>
    )
};


module.exports = StartFight;