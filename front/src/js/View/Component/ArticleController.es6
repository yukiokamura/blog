import React, { Component } from 'react';
class ArticleController extends Component {
  constructor(){
    super();
    this.state = {
      isLoading: false,
      hasError: false
    }
  }
  render(){
  //   const articles = [];
  //   for (var i = 0; i < 3; i++) {
  //     articles.push(
  //       <div className="article">
  //         <p className="article--category">CODE</p>
  //         <div className="article--header">
  //           <p className="article--header--date">
  //             <span className="article--header--date--year">2018</span>
  //             <span className="article--header--date--month">08.17</span>
  //           </p>
  //           <h2 className="article--header--title">ブログタイトル</h2>
  //         </div>
  //         <div className="article--main">
  //           ブログ本文ブログ本文ブログ本文ブログ本文ブログ本文ブログ本文ブログ本文ブログ本文ブログ本文ブログ本文ブログ本文ブログ本文ブログ本文ブログ本文ブログ本文ブログ本文ブログ本文ブログ本文ブログ本文
  //         </div>
  //       </div>
  //     )
  //   }
    return (
      <div className="article--wrapper">

      </div>
    )
  }
}

export default ArticleController;
