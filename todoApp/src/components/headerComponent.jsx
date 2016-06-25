var React = require('react');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            headerInput: ''
        }
    },
    componentWillMount: function () {
        //console.log('storage ', this.props.storage)
    },
    render: function () {
        return <div className="input-group">
            <input onInput={this.processInput}
                   value={this.state.headerInput}
                   className="form-control" type="text"/>
           <div className="input-group-btn">
                <button
                    onClick={this.clicked} className={"btn btn-default"} disabled={!this.props.loaded} type="button">
                    Dodaj
                </button>
           </div>
        </div>
    },
    clicked: function () {
        this.props.storage.push({
            task: this.state.headerInput,
            wasDone: false
        });

        this.setState({
            headerInput: ''
        });
    },
    processInput: function (e) {
        this.setState({
            headerInput: e.target.value
        });
    }
});