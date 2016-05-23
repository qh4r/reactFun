var React = require('react');
require('../styles/bootstrap.css');
require('../styles/index.css');

var Question = function(props){
      return (<div>
          <div className="jumbotron col-sm-6 col-sm-offset-3 text-center transparentBg">
              <h1>{props.header}</h1>
              <div className="col-sm-12">
                  <form onSubmit={props.onSubmit}>
                      <div className="form-group">
                          <input type="text"
                                 className="form-control"
                                 placeholder="Username"
                                 onChange={props.onUpdate}
                                 value={props.name}/>
                      </div>
                      <div className="form-group col-sm-4 col-sm-offset-4">
                          <button className="btn btn-block btn-success"
                                  type="submit">
                              Dalej
                          </button>
                      </div>
                  </form>
              </div>
          </div>
      </div>)
};

Question.propTypes = {
    header: React.PropTypes.string.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
    onUpdate: React.PropTypes.func.isRequired,
    name: React.PropTypes.string.isRequired
};

module.exports = Question;