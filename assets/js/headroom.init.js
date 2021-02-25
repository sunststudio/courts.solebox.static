var navBar = document.querySelector("header");

var options = {
  offset: 20,
  tolerance: 5
};

// construct an instance of Headroom, passing the element
var headroom  = new Headroom(navBar, options);
// initialise
headroom.init();