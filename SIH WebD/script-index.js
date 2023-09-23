//DOM

function showSignIn(){
  let sign = document.querySelector('.logIn');
  console.log(sign);
  if(sign.style.visibility = 'hidden')
    sign.style.visibility = 'visible';
  else if(sign.style.visibility = 'visible'){
    sign.style.visibility = 'hidden';
  }
}
function explore(){
  let button1 = document.getElementsByClassName("button1");
}




//GSAP

var tl1=gsap.timeline();
tl1
  .from(".nav",{
    y:35,
    duration:1
  })
  .from(".right",{
    scale:0,
    duration:1
  })
var tl2=gsap.timeline();

tl2
   .from(".fadeUp",{
    opacity : 0,
    y:50,
    duration :1,
    delay:0.5
})  
    .from("p",{
        scale:0,
        duration:0.3
    })
    .from(".explore-button",{
      opacity:0,
      y:20,
      duration:1
    })

gsap.from([".area1",".area2",".area3"],{
  scrollTrigger:{
    trigger:[".area1",".area2",".area3"],
    scroller:"body",
    // end:"bottom 60%",
    scrub:3
  },
  opacity:0,
  duration:1

})
gsap.from(".quote",{
  scrollTrigger:{
    trigger:".quote",
    scroller:"body",
    scrub:3
  },
  opacity:0,
  duration:1
})

gsap.from(".left-commas",{
  scrollTrigger:{
        trigger:".left-commas",
        scroller:"body",
        scrub:4
      },
  x:-250,
  duration : 3
})
gsap.from(".right-commas",{
  scrollTrigger:{
        trigger:".right-commas",
        scroller:"body",
        scrub:4
      },
  x:-250,
  duration : 3
})




