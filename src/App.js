import React, { Component } from 'react';
import './App.css';
import Bootstrap from './components/Bootstrap/Bootstrap';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      isMenuOpen: false,
    }
  }

  toggleMobileMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }


  render(){

    const { isMenuOpen } = this.state;

    return (
      <>
        <Bootstrap
          isMenuOpen={isMenuOpen}
          toggleMenu={this.toggleMobileMenu}/>
      </>
    )
  }
}

export default App;
