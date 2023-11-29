const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});
function firstPageAnimi(){
  let ti=gsap.timeline();
  ti.from('#nav',{
    y:'-10',
opacity:0,
duration:7,
ease:Expo.easeInout
})
  .to('#boundingelem',{
    y:'0',
duration:1.5,
ease:Expo.easeInout,
stagger:.2,
delay:-1

  })
  .from('#herofooter',{
    y:'-10',
duration:1.5,
ease:Expo.easeInout,
opacity:0,
delay:-1

  })
}

function circleMover(){
  window.addEventListener("mousemove", function(dets){
   document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`;
  // console.log(dets.clientX,dets.clientY);
  })
}
circleMover();
firstPageAnimi();

document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});
