export default class CanvasAnimation{
  constructor(){
    this.$window = $(window);
    this.__circleNum = 50;
    $(this.$window).on('resize load',e=>{
      this.__frame = null;
      this.amebas = [];
      this.canvas_init();
      this.clickEvent();
    });
  }

  canvas_resize(canvas){
    var width = $(canvas).outerWidth();
    var height = $(canvas).outerHeight();
    canvas.width = width*devicePixelRatio;
    canvas.height = height*devicePixelRatio;
    canvas.style.height = String(canvas.height / devicePixelRatio) + "px";
    canvas.style.width = String(canvas.width / devicePixelRatio) + "px";
  }

  canvas_init(){
    this.canvas = document.getElementById('canvas');
    if(!this.canvas || !this.canvas.getContext)return;
    this.canvas_resize(this.canvas);
    this.ctx = this.canvas.getContext('2d');
    const cw = this.canvas.width;
    const ch = this.canvas.height;
    for (var i = 0; i < this.__circleNum; i++) {
      const x = ~~(Math.random() * cw);
      const y = ~~(Math.random() * ch);
      const a = new Ameba(x,y,i);
      this.draw_circle(x,y,a.opacity);
      this.amebas.push(a);
    }

    this.frame();
  }
  getDistance(a,b){
    const x = a.center.x - b.center.x;
    const y = a.center.y - b.center.y;
    return Math.sqrt(x*x + y*y);
  }

  draw_circle(x,y,opacity){
    this.ctx.beginPath();
    this.ctx.arc(x, y, 50, 0, Math.PI*2, false);
    const r = ~~(255 * Math.random());
    const g = ~~(255 * Math.random());
    const b = ~~(255 * Math.random());
    this.ctx.fillStyle = `rgba(${r},${g},${b},${opacity})`;
    this.ctx.globalCompositeOperation = 'lighter';
    this.ctx.fill();

  }


  frame(){
    const cw = this.canvas.width;
    const ch = this.canvas.height;
    this.ctx.clearRect(0,0,cw,ch);

    for (const ameba of this.amebas) {

      ameba.move(this.amebas,cw,ch);
      this.draw_circle(ameba.center.x,ameba.center.y,ameba.opacity);

    }
    this.frameID = requestAnimFrame(this.frame.bind(this));
  }

  clickEvent(){
    $(window).on('click',e=>{
      for (const a of this.amebas) {
        a.is_click = !a.is_click;
      }
    })
  }

}

class Ameba{
  constructor(x,y,i){
    this.__id = i;
    this.center = {
      x:x,
      y:y
    };
    this.r = 50;
    this.speed = {
      x:0,
      y:0
    }
    this.is_groupcenter = i < 5;
    this.groupNum = -1;
    this.is_click = false;
    this.clicking = 10;
    this.opacity = 1;
  }

  move(list,cw,ch){
    this.toDistance(list);
    this.toSpeed(list);
    this.toCenter(list);

    const speed = Math.sqrt(this.speed.x * this.speed.x + this.speed.y * this.speed.y);
    if(speed > 7){
      const r = 7 / speed;
      this.speed.x *= r;
      this.speed.y *= r;
    }
    const d = this.getDistance({
      center:{
        x:cw/2,
        y:ch/2
      }
    },this);
    const d0 = this.getDistance({
      center:{
        x:0,y:0
      }
    },{
      center:{
        x:cw/2,
        y:ch/2
      }
    })
    this.opacity = (1 - d/d0) * .3;
    if(this.center.x < 0 && this.speed.x < 0 || this.center.x > cw && this.speed.x > 0) this.speed.x *= -1;
    if(this.center.y < 0 && this.speed.y < 0 || this.center.y > ch && this.speed.y > 0) this.speed.y *= -1;
    this.center.x += this.speed.x;
    this.center.y += this.speed.y;


  }

  toCenter(list){
    const center = {x: 0, y:0};
    for (const a of list) {
      if(a.__id != this.__id){
        center.x += a.center.x;
        center.y += a.center.y;
      }

    }
    center.x /= list.length - 1
    center.y /= list.length - 1;
    this.speed.x += (center.x - this.center.x)/100;
    this.speed.y += (center.y - this.center.y)/100;
  }

  toDistance(list){
    if(this.is_click && this.clicking < 200) {
      this.clicking += 0.5;

    }else if(this.is_click && this.clicking >= 200){
      this.clicking += 0.1;
    }else{
      this.clicking = 10;
    }
    for (const a of list) {
      if(a.__id != this.__id){
        const d = this.getDistance(this,a);
        const d_index = this.is_click ? this.clicking : 10;
        if(d < d_index){
          this.speed.x -= (- this.center.x + a.center.x)/10;
          this.speed.y -= (- this.center.y + a.center.y)/10;
        }
      }
    }
  }

  toSpeed(list){
    const average = {x: 0, y: 0};
    for (const a of list) {
      if(a.__id != this.__id){
        average.x = a.speed.x;
        average.y = a.speed.y;
      }
    }
    average.x /= list.length - 1;
    average.y /= list.length - 1;
    this.speed.x += (average.x - this.speed.x)/2;
    this.speed.y += (average.y - this.speed.y)/2;
  }

  toMouse(){

  }

  getDistance(a,b){
    const x = a.center.x - b.center.x;
    const y = a.center.y - b.center.y;
    return Math.sqrt(x*x + y*y);
  }
}
