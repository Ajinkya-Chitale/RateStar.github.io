jQuery(document).ready(function($) {

	var owl = $("#owl-demo-2");
  owl.owlCarousel({
	  loop : true,
	  autoPlay:true,
      autoPlayTimeout:1000,
      autoPlayHoverPause:true,
	  nav:false,
	  autoplay:1200,
	  autoplayHoverPause:true,
      items : 2, 
      itemsDesktop : [992,2],
      itemsDesktopSmall : [768,1], 
      itemsTablet: [480,1], 
      itemsMobile : [320,1]
  });

$('.latest-blog-posts .thumbnail.item').matchHeight();
	
});