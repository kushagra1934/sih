let cursor = document.querySelector(".cursor");
let main = document.querySelector(".main")
main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        left:dets.x,
        top:dets.y
    })
})

let form = document.querySelector("form");
function cursorAnimation(){
    form.addEventListener("mouseenter",function(){
        gsap.to(cursor,{
            scale:10,
            opacity:0.3
        })
    })
    form.addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            scale:1,
            opacity:1
        })
    })
}
cursorAnimation()