export default class SmoothController{
  constructor(className){
    this.$target = $(className);
    this.clickEvent();
  }

  clickEvent(){
    $(this.$target).on('click',e=>{
      const $target = $(e.currentTarget);
      const $href = $($target.data('href'));
      const posi = $href.offset().top;
      $('html,body').animate({
        scrollTop:posi
      },500,"swing");
    })
  }
}
