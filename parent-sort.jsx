// A small script for repositioning layers
// beneath their parent object

var myComp = app.project.activeItem;

function parentSort() {
  // the element is continously being removed
  // as a result it is necessary to iterate
  // through the list in reverse to avoid skipping
  // any layer
  for( i = myComp.numLayers; i > 0; i-- ) {
  
    if( myComp.layer(i).parent === null ) { // skip layers without parents
      // alert(i + ": null")
      
      continue;
    }
    
    var parentIndex = myComp.layer(i).parent.index;
    
    myComp.layer(i).moveAfter( myComp.layer(parentIndex) );
    // alert(i + ": " + myComp.layer(i).name + "'s parent is: " + parentIndex)
  }
}

parentSort();
