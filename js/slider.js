$(document).ready(function(){

var owl = $('.slider').owlCarousel({
   loop:true,
    margin: 50,
    lazyLoad: true,
    nav:true,
    autoplay: true,
    smartSpeed: 250,
    autoplayTimeout: 5000,
    navText : ["<?xml version='1.0' encoding='utf-8'?><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 129 129\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" enable-background=\"new 0 0 129 129\"><g><path d=\"m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z\"/></g></svg>",
    "<?xml version='1.0' encoding='utf-8'?><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 129 129\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" enable-background=\"new 0 0 129 129\"><g><path d=\"m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z\"/></g></svg>"],
 
    responsive:{
      0:{
        items:1
      },

	  510: {
	    items:1,
	    center: true
		
	  },
	
    961: {
      items:1,
    }
    }
  });

  var owl2 = $('.slider2').owlCarousel({
     loop:true,
     margin: 2,
     lazyLoad: true,
     nav:true,
     autoplay: true,
     smartSpeed: 250,
     autoplayTimeout: 10000,
     navText : ["<?xml version='1.0' encoding='utf-8'?><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 129 129\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" enable-background=\"new 0 0 129 129\"><g><path d=\"m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z\"/></g></svg>",
     "<?xml version='1.0' encoding='utf-8'?><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 129 129\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" enable-background=\"new 0 0 129 129\"><g><path d=\"m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z\"/></g></svg>"],
  
     responsive:{
      0:{
        items:1,
      },
 
      769: {
        items:1,
      },

      961: {
        items:2,
      },

      1260: {
        items:3,
      }
     }
   });

  
 });