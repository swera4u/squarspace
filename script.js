var tl = gsap.timeline();

tl.from("nav", {
    y:-100,
    duration:1,
    scale: 1.2,
    opacity:0,
});
tl.from("h1, h1>span", {
    x:500,
    duration:.5,
    scale: 1.2,
    stagger:0.2,
    opacity:0,
});


tl.from("#left-img", {
   scale:0,
    duration:.5,
    opacity:0,
    rotate:90,
});
tl.from("#right-img", {
rotate:70,
    duration:.5,
    opacity:0,
   scale:0
});


gsap.from("#page1 h2",{
    opacity:0,
    x:-200,
    duration:1,
    scrollTrigger:"#page1 h2"
});
gsap.from("#box img",{
    opacity:0,
    y:400,
    duration:1,
    stagger:.3,
    scrollTrigger:"#box img"
});