import React, { Component } from 'react';
import './App.css';
import Logo from './components/Logo'
import Input from './components/Input/Input'
import PhotoView from './components/PhotoView/PhotoView';
import ColorView from './components/ColorView/ColorView'
import Clarifai from 'clarifai'

const app = new Clarifai.App({
  apiKey: '56add88a29ff436790798de56c2d72ee'
})


class App extends Component {
  constructor() {
    super()
    this.state = {
      url: '',
      urlDisplay: '',
      photoView: '',
      colorView: []
    }
  }

  onChange = (e) => {
    this.setState({url: e.target.value})
  }


  imageSubmit = (e) => {
    e.preventDefault()
    app.models.predict("eeed0b6733a644cea07cf4c60f87ebb7", this.state.url)
    .then((response) => {
      const colors = response.outputs[0].data.colors.map(color => color.raw_hex)
        this.setState({
          colorView: colors
        })
      },
      (err) => console.log(err))
    this.setState({displayUrl: this.state.url})
    }

  render(){
      return (
        <div>
          <Logo />
          <Input onChange={this.onChange} imageSubmit={this.imageSubmit} />
          <PhotoView image={this.state.displayUrl} />
          <ColorView image={this.state.url} colorView={this.state.colorView} />
        </div>
    );
  }
}

export default App;
