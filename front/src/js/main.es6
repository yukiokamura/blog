

import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";
import ViewController from './View/ViewController.es6';
import UIController from './UI/UIController.es6';

window.requestAnimFrame = (function() {
  return (
      window.requestAnimationFrame       ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame    ||
      window.oRequestAnimationFrame      ||
      window.msRequestAnimationFrame     ||
      function(callback, time) {
        var time = time ? time: 1000 / 60;
        window.setTimeout(callback, time);
    }
  );
})();

new UIController();
