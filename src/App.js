import './App.css';
import react from 'react';
import Navbar from './Components/Navbar/Navbar';
import Logo from './Components/Logo/Logo';
import ImageURL from './Components/Image/ImageURL';
import Particles from 'react-particles-js';
import AccountLVL from './Components/AccountLVL/AccountLVL';
import Heading from './Components/Heading/Heading';


const particleOptions = {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 800
      }
    }
  },
}

class App extends react.Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }
  onInputchange = (event) => {
    console.log(event.target.value);
  }
  onButtonSubmit = () => {
    console.log("Click");
  }
  render() {
    return (
      <div className="App">
        <Particles className="particles"
          params={particleOptions}
        />
        <Navbar />
        <Logo />
        <Heading />
        <AccountLVL />
        <ImageURL onInputchange={this.onInputchange} onButtonSubmit={this.onButtonSubmit} />
      </div>
    );
  }
}

export default App;
