import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Component/Header.es6';
import UnderArrow from './Component/UnderArrow.es6';
import ArticleController from './Component/ArticleController.es6';

window.__blogURL = 'http://blog/';
class ViewController extends React.Component{
  render(){
    return (
      <div className="wrapper">
        <Header/>
        <UnderArrow/>
        <ArticleController/>
      </div>
    )
  }
};


ReactDOM.render(<ViewController/>, document.querySelector('#root'));
