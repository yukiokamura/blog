export default class HeaderAnimation{
  constructor(){
    this.header = $('header');
    this.$h1 = this.header.find('h1')
    this.textSeparate();
    this.$p = $('.header p');
    this.move();
    this.subTitleInit();
    this.count = 0;
    this.scrollspanAnimation = null;
    this.scrollEvent()
  }
  textSeparate(){
    this.$h1.html(this.textSplit(this.$h1));
    this.$span = this.$h1.find('span');
  }

  move(){
    let r = ~~(this.$span.length * Math.random());
    TweenMax.to(this.$span.eq(r),3,{
      rotation: 360,
      transformOrigin:'center',
      ease: Power4.easeInOut,
      delay:3,
      onComplete:()=>{
        TweenMax.set(this.$span.eq(r),{
          rotation: 0
        })
        this.move();
      }
    })
  }

  textSplit($text){
    const t = $text.text();
    const tlist = t.split('');
    let stext = '';
    for (let s of tlist) {
      stext += '<span>'+s+'</span>';
    }
    return stext;
  }


  subTitleAnimation($pspan){

    const pleft = this.$p.offset().left - 100;
    const list = [];
    $pspan.each((i,e)=>{
      const left = $(e).offset().left;
      TweenMax.to($(e),2,{
        x:pleft - left,
        ease: Power4.easeInOut,
        opacity:0,
        delay:2,
        onComplete:()=>{
          list.push('');
          if(list.length == $pspan.length)this.changeText();
        }
      })
    })
  }

  subTitleInit(){
    this.$p.html(this.textSplit(this.$p));
    const $pspan =  this.$p.find('span');
    TweenMax.to($pspan,.5,{
      opacity:1,
      ease: Power4.easeInOut,
      onComplete:()=>{
        this.subTitleAnimation($pspan);
      }
    })
  }

  changeText(){
    const t = [
      'June 28th,1993',
      'Love Football',
      'front engineer'
    ]
    const index = this.count % t.length;
    this.$p.html(t[index]);
    this.subTitleInit();
    ++this.count;
  }

  scrollEvent(){
    $(window).on('scroll',e=>{
      if($(window).scrollTop() == 0){
        this.subTitleAnimation(this.$p.find('span'));
        this.move();
      }else{
        const t = $(window).scrollTop()
        TweenMax.killTweensOf(this.$span);
        TweenMax.killTweensOf(this.$p.find('span'));
        this.scrollAnimation(t)
        this.scrollHeadAnimation(t)
      }

    })
  }
  scrollAnimation(top){
    const $pspan =  this.$p.find('span');
    $pspan.css('opacity',10/top);
  }

  scrollHeadAnimation(top){
    const $span = this.$span;
    $span.each((i,elem)=>{
      let r = $(elem).attr('data-r') || 1;
      ++r;
      console.log(r);
      TweenMax.set($(elem),{
        rotation:r*(i+1) * top * .01,

      })
      $(elem).attr('data-r',r);
    })
  }
}
