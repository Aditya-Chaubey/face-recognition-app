import './App.css';
import react from 'react';
import Navbar from './Components/Navbar/Navbar';
import Logo from './Components/Logo/Logo';
import ImageURL from './Components/Image/ImageURL';
import Particles from 'react-particles-js';
import AccountLVL from './Components/AccountLVL/AccountLVL';
import Heading from './Components/Heading/Heading';
import Clarifai from 'clarifai';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import 'tachyons';

const app = new Clarifai.App({
  apiKey: '1ff53fb0e8a741c186cf897830003202'
});

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
      input: '',
      imagelink: '',
      box: {}
    }
  }

  onInputchange = (event) => {
    this.setState({ input: event.target.value });
  }

  calculateFaceLocation = (data) => {
    const face = data.outputs[0].data.regions[0].region_info.bounding_box;
    const faceImage = document.getElementById("faceImage");
    const imageWidth = Number(faceImage.width);
    const imageHeight = Number(faceImage.height);
    return {
      leftCol: face.left_col * imageWidth,
      topRow: face.top_row * imageHeight,
      rightCol: imageWidth - (face.right_col * imageWidth),
      bottomRow: imageHeight - (face.bottom_row * imageHeight)
    }
  }

  displayBox = (box) => {
    this.setState({ box: box })
  }

  onButtonSubmit = () => {
    this.setState({ imagelink: this.state.input });
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) => {
        this.displayBox(this.calculateFaceLocation(response));
      })
      .catch((err) => {
        console.log(err);
      })
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
        <FaceRecognition imagelink={this.state.imagelink} box={this.state.box} />
      </div>
    );
  }
}

export default App;
