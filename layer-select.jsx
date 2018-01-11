// A simple script for editing every n-th layer.
// Editable attributes include:
//    name
//    parent
//    inPoint & outPoint
//    enabled
//    solo
//    shy
//    shy
//    locked
//    active


var myComp = app.project.activeItem;

// Make sure that a comp is open
if ( myComp != null && myComp instanceof CompItem ) {
  for( i = 1; i < myComp.numLayers; i++ ) {
    if( i % 2 === 0 ) {  // every other layer
      myComp.layer(i).parent = myComp.layer(i-1); // parent this layer to the layer above it
      myComp.layer(i).shy = true; // shy this layer
      myComp.layer(i).selected = true; // select this layer
    }
  }
}

// For further reference see: https://blogs.adobe.com/creativecloud/files/2012/06/After-Effects-CS6-Scripting-Guide.pdf
