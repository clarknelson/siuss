$(document).ready(function(){
  var counter = 0;
  var a, b, c;

  // forward
  $('#about-us .gallery span:last-of-type').click(function(){
    if(counter > -2){
      counter--;
      a = 0+(counter*100);
      b = 100+(counter*100);
      c = 200+(counter*100);
      $('#about-us .gallery img:nth-of-type(1)').css('left', a+'%');
      $('#about-us .gallery img:nth-of-type(2)').css('left', b+'%');
      $('#about-us .gallery img:nth-of-type(3)').css('left', c+'%');
    }
  });

  // backwards
  $('#about-us .gallery span:first-of-type').click(function(){
    if(counter < 0){
      counter++;
      a = 0+(counter*100);
      b = 100+(counter*100);
      c = 200+(counter*100);
      $('#about-us .gallery img:nth-of-type(1)').css('left', a+'%');
      $('#about-us .gallery img:nth-of-type(2)').css('left', b+'%');
      $('#about-us .gallery img:nth-of-type(3)').css('left', c+'%');
    }
  });
});
