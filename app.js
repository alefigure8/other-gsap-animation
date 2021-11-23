const tl = gsap.timeline({defaults: {ease: 'power1.easeOut'}})

tl.to('.text', {y: '0%', duration: 1, stagger: 0.25})
tl.to('.slider', {y: '-100%', duration: 1.5, delay: .5})
tl.to('.intro', {y: '-100%', duration: 1}, '-=1.2')
tl.fromTo('nav', {opacity: 0, x: -20}, {opacity: 1, x: 0, duration: .5})
tl.fromTo('.big-text', {opacity: 0, y: -20}, {opacity: 1, y: 0}, '-=.2')