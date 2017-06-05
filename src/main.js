import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  render() {
    return <h1 style={{color: 'red'}}>{this.props.children}</h1>;
  }
}

class Greeter extends React.Component{
    constructor(props) {
    super(props);
    this.state = { name: 'React' };
  }

  render() {
    return (
      <div>
        <Header>Hello {this.state.name}</Header>
        <input type='text' ref='name' />
        <button onClick={this.handleGreet.bind(this)}>Greet!</button>
      </div>
    );
  }

  handleGreet() {
    this.setState({ name: this.refs.name.value });
  }
}
class App extends React.Component{
    render(){
        //return <h1> Hello React </h1>;
        return <Greeter name="Ben"/>;
    }
}

ReactDOM.render(<App/>, document.querySelector("#app"));