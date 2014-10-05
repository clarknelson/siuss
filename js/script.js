$(document).ready(function(){
  var counter = 0;
  var a, b, c, d, e, f, g;

  // forward
  $('#about-us .gallery span:last-of-type').click(function(){
    if(counter > -6){
      counter--;
      a = 0+(counter*100);
      b = 100+(counter*100);
      c = 200+(counter*100);
      d = 300+(counter*100);
      e = 400+(counter*100);
      f = 500+(counter*100);
      g = 600+(counter*100);

      $('#about-us .gallery img:nth-of-type(1)').css('left', a+'%');
      $('#about-us .gallery img:nth-of-type(2)').css('left', b+'%');
      $('#about-us .gallery img:nth-of-type(3)').css('left', c+'%');
      $('#about-us .gallery img:nth-of-type(4)').css('left', d+'%');
      $('#about-us .gallery img:nth-of-type(5)').css('left', e+'%');
      $('#about-us .gallery img:nth-of-type(6)').css('left', f+'%');
      $('#about-us .gallery img:nth-of-type(7)').css('left', g+'%');
    }
  });

  // backwards
  $('#about-us .gallery span:first-of-type').click(function(){
    if(counter < 0){
      counter++;
      a = 0+(counter*100);
      b = 100+(counter*100);
      c = 200+(counter*100);
      d = 300+(counter*100);
      e = 400+(counter*100);
      f = 500+(counter*100);
      g = 600+(counter*100);

      $('#about-us .gallery img:nth-of-type(1)').css('left', a+'%');
      $('#about-us .gallery img:nth-of-type(2)').css('left', b+'%');
      $('#about-us .gallery img:nth-of-type(3)').css('left', c+'%');
      $('#about-us .gallery img:nth-of-type(4)').css('left', d+'%');
      $('#about-us .gallery img:nth-of-type(5)').css('left', e+'%');
      $('#about-us .gallery img:nth-of-type(6)').css('left', f+'%');
      $('#about-us .gallery img:nth-of-type(7)').css('left', g+'%');
    }
  });

  var width = $('#about-us .gallery').innerWidth();
  var height = width*0.65;
  $('#about-us .gallery').css('height', height);

  $(window).resize(function(){
    width = $('#about-us .gallery').innerWidth();
    height = width*0.65;
    $('#about-us .gallery').css('height', height);
  });
});
