function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform
        ? "transform"
        : "fixed",
    });
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}

locomotiveAnimation();

function videoConAnimation(){
    let videoCon = document.querySelector(".video-container")
let play = document.querySelector(".play")

videoCon.addEventListener("mouseenter",function(){
    gsap.to(play,{
        opacity:1,
        scale:1,
        duration:0.8
    })
})

videoCon.addEventListener("mouseleave",function(){
    gsap.to(play,{
        opacity:0,
        scale:0,
        duration:0.1
    })
})

videoCon.addEventListener("mousemove",function(dets){
    gsap.to(play,{
        left:dets.x-100,
        top:dets.y-100
    })
})
}

videoConAnimation()

function page1Animation(){
  var tl = gsap.timeline()
tl
  .from(".page1 h1",{
    opacity:0,
    y:100,
    delay:0.5,
    duration:0.8,
    stagger:0.3
  })
  .from(".video-container",{
    scale:0.7,
    opacity:0
  })
}

page1Animation()

function page2Animation(){
  gsap.from(".elem img",{
    scrollTrigger:{
      trigger:".elem img",
      scroller:".main",
      start:"top 50%",
      end:"bottom 50%",
      scrub:4,
    },
    opacity:0,
    duration:1
  })
}

page2Animation()

function page3Animation(){
  gsap.from(".message",{
    scrollTrigger:{
        trigger:".message",
        scroller:".main",
        start:"top 50%",
        end:"bottom 50%",
        scrub:4
    },
    opacity:0,
    delay:1,
    // x:-100,
    duration:1.5
  })

gsap.from(".message-dets",{
  scrollTrigger:{
      trigger:".message-dets",
      scroller:".main",
      start:"top 50%",
      end:"bottom 50%",
      scrub:4,
  },
  opacity:0,
  delay:1,
  // x:100,
  duration:1.5
})
}

page3Animation()

function page4Animation(){
  gsap.from(".scale",{
    scrollTrigger:{
      scroller:".main",
      trigger:".scale",
      start:"top 50%",
      end:"bottom 50%",
      scrub:4,
      markers:true
    },
    scale:0.9,
    duration:1
  })
}

// page4Animation()

function colorChange(){
  gsap.to([".page3",".page4"],{
    scrollTrigger:{
      trigger:[".page3",".page4"],
      scroller:".main",
      scrub:4,
      start:"top 50%",
      end:"bottom 50%"
    },
    backgroundColor : "#fff",
    color : "black",
    duration :1
  })
  gsap.to(["h2","button"],{
    scrollTrigger:{
      trigger:[".page3",".page4"],
      scroller:".main",
      scrub:4,
      start:"top 50%",
      end:"bottom 50%"
    },
    color:"black",
  })
}

colorChange()