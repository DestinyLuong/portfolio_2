$(document).ready(function(){
  $('.navbar-toggler').click(function(){
   let $this = $(this);
    if($('.collapse').is(':visible')) {
         $('.collapse').hide();
    }
    else {
         $('.collapse').show();
    }
  });
   $('.dropdown-toggle').click(function(){
   let $this = $(this);
    if($('.dropdown-menu').is(':visible')) {
         $('.dropdown-menu').hide();
    }
    else {
         $('.dropdown-menu').show();
    }
  });
  $('#cardCh2').click(function(){
    window.location.href = "ch2.html";
  });
  $('#cardCh3').click(function(){
    window.location.href = "ch3.html";
  });
});

// let portfolioQs = {
//   ch2:{
//     sec1: {
//       title,
//       questions:[
//         "Q1. In your own words, describe what event driven programming is. What event handler was used in the I Have a Dream app? How was it used?",
//         "Q2. Is it possible to create an app without event driven programming? Explain.",
//         " Q3. What elements and components make up the User Interface (UI) for the I Have A Dream app?",
//        "Q4. What are some of the elements that make up the UI for a car? A vending machine?"
//        }
//       ],
//       answers: [

//       ],
//     },
//     sec2: {
//       title,
//       questions:[

//       ],
//       answers: [

//       ],
//     },
//     sec3: {
//       title,
//       questions:[

//       ],
//       answers: [

//       ],
//     },
//     sec4: {
//       title,
//       questions:[

//       ],
//       answers: [

//       ],
//     },
//     sec5: {
//       title,
//       questions:[

//       ],
//       answers: [

//       ],
//     },
    
//   }
// }
// for let i = 0; i < portfolioQs.ch.length(); i++){
//   for(let j = 0; j < portfolioQs.sec.length(); j++){
//     $("body").append(`#ch${i}.${j}`);
//     for(let k = 0; k < portfolioQs.sec[j] questions.length(); k++){
//       $(`#ch${i}.${j}`).html(`<p>${portfolioQs.sec[k]answers}</p>`);
//       $(`#ch${i}. ${j}`).appenf(`<p>${portfolioQs.sec[k]answers}</p>`);
//     }
//   }
// }
