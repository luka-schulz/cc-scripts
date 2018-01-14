// This script sorts layers by their y-position.
// Change the comparision on line 11 to suit your needs.

// get active comp
var myComp = app.project.activeItem;

// insertion sort function
function insert( pointer ) {
  var i = pointer;
  
  // sort by the y-value
  while( i > 0 && myComp.layer(i).position.value[1] > myComp.layer(i + 1).position.value[1] ) {
    myComp.layer(i + 1).moveBefore(myComp.layer(i));
    i--;
  }
}

// loop through all layers to preform
// the insertion sort
if( myComp != null && myComp instanceof CompItem ) {
  for( i = 1; i < myComp.numLayers; i++ ) {
    insert( i );
  }
}

// For further reference see: https://blogs.adobe.com/creativecloud/files/2012/06/After-Effects-CS6-Scripting-Guide.pdf
