var Badge = React.createClass({
    render: function () {
        return (
            <button className="btn btn-primary" type="button">
                {this.props.text}: <span className="badge">{this.props.quantity}</span>
            </button>
        )
    }
});

var ThumbnailsList = React.createClass({
    render: function () {
        return <div className="row">
            {this.props.input.map(function(element){
                return <Thumbnail data={element}/>
                })}
        </div>
    }
});
var Thumbnail = React.createClass({
    render: function () {
        return (
                <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                        <img src={this.props.data.url} alt={this.props.data.label}/>
                        <div className="caption">
                            <h3>{this.props.data.label}</h3>
                            <Badge text={this.props.data.button.name} quantity={this.props.data.button.number}/>
                        </div>
                    </div>
                </div>
        )
    }
})
ReactDOM.render(<Badge text="Wiadomości" quantity="103"/>, document.getElementById('f1'));
ReactDOM.render(<ThumbnailsList input={[
   {button: {name: "Wychodzące", number: 23}, label: 'Coś odemnie', url: 'http://image000.flaticon.com/icons/svg/134/134965.svg'},
    {button: {name: "Przychodzące", number:42}, label: 'Coś fajnego', url: 'http://image000.flaticon.com/icons/svg/134/134967.svg'},
    {button: {name: "Kopie robocze", number:3}, label: 'Coś do zapamiętania', url: 'http://image000.flaticon.com/icons/svg/134/134974.svg'},
    {button: {name: "Spam", number:12}, label: 'Coś zbędnego', url: 'http://image000.flaticon.com/icons/svg/134/134970.svg'}
]}/>, document.getElementById('f2'));