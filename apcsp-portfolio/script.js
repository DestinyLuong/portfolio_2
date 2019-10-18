$(document).ready(function(){
  $('#about-me').click(function(){
    window.location.href = "aboutme.html";
  })
  $('#blog').click(function(){
    window.location.href = "blog.html";
  })
  $('#compsci').click(function(){
   window.location.href = "compsci.html";
  });
  $('#projects').click(function(){
    window.location.href = "projects.html";
  });
 $('#gallery').click(function(){
    window.location.href = "gallery.html";
  });
  $('#links').click(function(){
    window.location.href = "links.html";
  });
  $('#contacts').click(function(){
    window.location.href = "contacts.html";
  });
  $('#gmail').click(function(){
    window.location.replace('https://mail.google.com/mail/?view=cm&fs=1&to=destinyul2010@gmail.com')
  })
  $('.card-video').click(function(){
    window.location.replace('https://www.youtube.com/watch?v=rgEuKZw8M30');
  })
  $('#linked-in').click(function(){
     window.location.replace('https://www.linkedin.com/in/destiny-luong-781ba1188/');
  })
  $('.navbar-toggler').click(function(){
   let $this = $(this);
    if($('.collapse').is(':visible')) {
         $('.collapse').hide();
    }
    else {
         $('.collapse').show();
    }
  })
});
