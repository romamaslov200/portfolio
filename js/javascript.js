function scrollTo(element) {
    window.scroll({
      left: 0, 
      top: element.offsetTop, 
      behavior: 'smooth'
    })
  }
  var button = document.querySelector('#button');
  var footer = document.querySelector('#info-txt');
  
  var button_evidence = document.querySelector('#button_evidence');
  var evidence = document.querySelector('#evidence');


  button.addEventListener('click', () => {
    scrollTo(footer);
  })

  button_evidence.addEventListener('click', () => {
    scrollTo(evidence);
})


  $(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() != 0) {
      $('#topNubex').fadeIn();
      } else {
      $('#topNubex').fadeOut();
      }
    });
    
    $('#topNubex').click(function() {
      $('body,html').animate({scrollTop:0},700);
  });
  });