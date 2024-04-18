// jquery events
// list of more events :{
// double click,mouseenter,mouseleave,mousedown,mouseup
// 
// hover
// form event: focus,blur,change
// }
// $(function(){
//     $("p").on({
//         "click": function(){
//             console.log("Clicked")
//         },
//         "mouseover":function(){
//             console.log("hovered")
//         }
//     })
// })

// $(function(){
//     $("p").click(function(){
//         console.log("You Clicked a paragraph")
//     })
// })

// $(function(){
//     $("p").hover(function(){
//         console.log("you entered")
//     },
//     function(){
//         console.log("you left")
//     })
// })


/* jQuery Events */
$(function(){
    $( "p" ).one({
       "click": function() { console.log( "clicked!" ); },
       "mouseover": function() { console.log( "hovered!" ); }
    });
    
    $( "p" ).off( "click" );
    
    $( "input" ).change(function() {
       console.log( "You did something!" );
    })
  
    
  });
  
  // dblclick, mouseenter, mouseleave, mousedown, mouseup, hover
  
  // form events: foucs, blur, change


  $(document).ready(function() {
    // Click event
    $("#clickBtn").click(function() {
      alert("Button clicked!");
    });
  
    // Double click event
    $("#clickBtn").dblclick(function() {
      alert("Button double-clicked!");
    });
  
    // Mouse enter and leave events
    $("#textInput").mouseenter(function() {
      $(this).addClass("highlight");
    }).mouseleave(function() {
      $(this).removeClass("highlight");
    });
  
    // Key press event
    $("#textInput").keypress(function(event) {
      console.log("Key pressed: " + String.fromCharCode(event.which));
    });
  
    // Form submit event
    $("#testForm").submit(function(event) {
      event.preventDefault(); // Prevent form submission
      var name = $(this).find("input[name='name']").val();
      alert("Form submitted with name: " + name);
    });
  });

/*
This script demonstrates the following jQuery events:

Click event: Shows an alert when a button is clicked.
Double click event: Shows an alert when a button is double-clicked.
Mouse enter and leave events: Adds a highlight to an input field when the mouse enters and removes it when the mouse leaves.
Key press event: Logs the pressed key when typing in an input field.
Form submit event: Prevents the form from submitting, gathers form data, and displays it in an alert when submitted.
*/ 