import HeaderAnimation from './HeaderAnimation.es6';
import CanvasAnimation from './CanvasAnimation.es6';
import SmoothController from './SmoothController.es6';
export default class UIController{
  constructor(){
    this.headerAnimation = new HeaderAnimation();
    this.canvasAnimation = new CanvasAnimation();
    this.smoothController = new SmoothController('.underArrow');
  }
}
