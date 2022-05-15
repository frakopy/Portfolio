const strong = document.getElementById('current-learning')

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0 
}

const observer = new IntersectionObserver(animate_lis, options)
observer.observe(strong)


// Adding some animations from GSAP

function animate_lis ( entries, observer ) {
	entries.forEach(( entry ) => {
		if (entry.isIntersecting) {
			gsap.to(".stack", {opacity: 1, stagger: 0.3,  ease: "slow(0.7, 0.7, false)", duration: 1.5})
			observer.unobserve(strong) //stop to observe the element strong in order to execute the callback only once

			//If we have many elements the best way is to use the property target (entry.target) for each element
			// observer.unobserve(entry.target)
		}
	})
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
