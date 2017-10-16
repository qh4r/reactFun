const Comment = ({ text }) => {
  const emojifiedText = text
    .replace(':)', '😊')
    .replace(':D', '😀')
    .replace(':(', '🙁');
  return emojifiedText;
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Comment text="Today we are sailing home :)" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// IT IS ALSO POSSIBLE TO PASS CUSTOM ATTRIBUTES TO BUILD IN DOM ELEMENTS
// BUT THOSE THAT REACT USE STILL REQUIRE CAMEL CASE