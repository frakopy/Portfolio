const strong = document.getElementById('current-learning')

const observer = new IntersectionObserver(animate_lis)
observer.observe(strong)


// Adding some animations from GSAP

function animate_lis () {
	gsap.from(".stack", {opacity: 0, stagger: 0.5})
}

gsap.to(".my-name", {x:0, duration: 3, ease: "elastic"});
gsap.to(".about-me", {y:0, duration: 1, opacity:1, delay:1.5});


(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

})(jQuery);

ScrollReveal().reveal('.style2', { delay: 600 });
ScrollReveal().reveal('.style3', { delay: 600 });
ScrollReveal().reveal('.style4', { delay: 600 });
