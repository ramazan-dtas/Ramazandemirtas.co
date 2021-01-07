//Skill bar START
$('.skill-per').each(function(){
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width",per+'%');
    $({animatedValue: 0}).animate({animatedValue: per},{
      duration: 1000,
      step: function(){
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      },
      complete: function(){
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      }
    });
});
//Skill bar STOP

//load screen START
/*
$(window).load(function() {
  setInterval(function() {
    $(".loading").fadeOut("slow")
  }, 3000);
});
$(window).on("load", function(){
  $(".loading").fadeOut("slow");
});*/
$(window).on("load", function() {
  setInterval(function() {
    $(".loading").fadeOut("slow")
  }, 1000);
});
//load screen STOP