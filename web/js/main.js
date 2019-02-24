$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 800,             // Integer: Speed of the transition, in milliseconds
  timeout: 15000,          // Integer: Time between slide transitions, in milliseconds
  pager: false,           // Boolean: Show pager, true or false
  nav: false,             // Boolean: Show navigation, true or false
  random: false,          // Boolean: Randomize the order of the slides, true or false
  pause: false,           // Boolean: Pause on hover, true or false
  pauseControls: true,    // Boolean: Pause when hovering controls, true or false
  prevText: "Previous",   // String: Text for the "previous" button
  nextText: "Next",       // String: Text for the "next" button
  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
  manualControls: "",     // Selector: Declare custom pager navigation
  namespace: "rslides",   // String: Change the default namespace used
  before: function(){},   // Function: Before callback
  after: function(){}     // Function: After callback
});

Visibility.onVisible(function(){
	/* Animações Home */
	setTimeout(function(){
		$(".intro h1").addClass("animated fadeInDown");
	}, 400);
	setTimeout(function(){
		$(".bio h2").addClass("animated fadeInDown");
	}, 600);
	setTimeout(function(){
		$(".bio p").addClass("animated fadeInDown");
	}, 800);
	setTimeout(function(){
		$(".bio a").addClass("animated fadeInDown");
	}, 1000);
	setTimeout(function(){
		$(".encontra-aqui img").addClass("animated fadeInDown");
	}, 400);
	setTimeout(function(){
		$(".encontra-aqui h2").addClass("animated fadeInDown");
	}, 600);
	setTimeout(function(){
		$(".encontra-aqui p").addClass("animated fadeInDown");
	}, 800);
	setTimeout(function(){
		$(".encontra-aqui a").addClass("animated fadeInDown");
	}, 1000);
	/* Animações Bio */
	setTimeout(function(){
		$(".bio-interna h2").addClass("animated fadeInDown");
	}, 400);
	setTimeout(function(){
		$(".bio-interna p").addClass("animated fadeInDown");
	}, 600);
	setTimeout(function(){
		$(".bio-interna img").addClass("animated fadeInDown");
	}, 800);
	setTimeout(function(){
		$(".conheca-galeria h2").addClass("animated fadeInDown");
	}, 400);
	setTimeout(function(){
		$(".conheca-galeria a").addClass("animated fadeInDown");
	}, 600);
	setTimeout(function(){
		$(".bio-quebra blockquote").addClass("animated fadeInDown");
	}, 800);
});