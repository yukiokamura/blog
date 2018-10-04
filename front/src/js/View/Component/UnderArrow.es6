import React, { Component } from 'react';

class UnderArrow extends Component {
  constructor(){
    super();
    this.UnderArrow = null;
  }
  componentDidMount(){
    const tl = new TimelineMax({
      repeat:-1
    });
    tl.to(this.UnderArrow,2,{
      y:'100%',
      opacity:0,
    })
    .to(this.UnderArrow,.5,{
      y:'-100%',
      opacity:0
    })
    .to(this.UnderArrow,2,{
      y:'0%',
      opacity:1
    })
  }
  componentWillUnmount(){
    console.log('kill');
  }
  render(){
    return(
      <div className="underArrow"
        ref={div => this.UnderArrow = div}
        data-href=".article--wrapper"
        >
        <span></span>
        <span></span>
      </div>
    )
  }
}

export default UnderArrow;
