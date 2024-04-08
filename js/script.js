// jq
$(document).ready(function(){
	//--------------------------- alert
	// alert("hello");
	// $('button').click(function(){
	// alert("welcome");
	// })
	$( "#draggable" ).draggable();

// Draggable-1

	$( "#draggable_1" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });

// resizable
    $( "#resizable" ).resizable();

// selectable
    $( "#selectable" ).selectable();

// sortable
    $( "#sortable" ).sortable();

// accordion
    $( "#accordion" ).accordion({
    	collapsible: true
    });
// autocomplate
    var data = [
    	"Full Srack Web Development", 
    	"Graphics Design", 
    	"Digital Marketing"
    	];

    $( "#c_name" ).autocomplete({
      	source: data
    });
    
// datepicker
    $( "#datepicker" ).datepicker();

// slider

     $( "#slider" ).slider();

    // color animation
     var state = true;
    $( "#button" ).on( "click", function() {
      	if ( state ) {
        $( "#effect" ).animate({
        backgroundColor: "#aa0000",
        color: "#fff",
        width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
        backgroundColor: "#fff",
        color: "#000",
        width: 240
        }, 1000 );
      }
      state = !state;
    });

// toggler
$( "#button" ).on( "click", function() {
      $( ".newClass" ).switchClass( "newClass", "anotherNewClass", 1000 );
      $( ".anotherNewClass" ).switchClass( "anotherNewClass", "newClass", 1000 );
    });

// menu
$( "#menu" ).menu();

// selectmenu
$( "#speed" ).selectmenu();
 
    $( "#files" ).selectmenu();
 
    $( "#number" )
    .selectmenu()
    .selectmenu( "menuWidget" )
    .addClass( "overflow" );
 
    $( "#salutation" ).selectmenu();

// button
    $( ".widget input[type=submit], .widget a, .widget button" ).button();
    $( "button, input, a" ).on( "click", function( event ) {
      event.preventDefault();
    } );

// droppable
    $( "#draggable_1" ).draggable_1();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
        .html( "Dropped!" );
      }
    });
  } );