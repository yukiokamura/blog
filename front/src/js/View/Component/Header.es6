import React, { Component } from 'react';

class Header extends Component {
  constructor(){
    super();
    this.header = null;
  }
  render(){
    return(
      <header>
        <canvas id='canvas'></canvas>
        <div className="header"
          ref={div => this.header = div}
        >
          <p>front engineer</p>
          <h1>yukiokamura</h1>
        </div>
      </header>
    )
  }
}

export default Header;
