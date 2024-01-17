var acc = document.getElementsByClassName("accordion");
var span = document.querySelectorAll(".icon");


var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    
    if (panel.style.display === "block") {
      panel.style.display = "none";

    //   plusicon()
    } else {
      panel.style.display = "block";


    //   minusicon()
      

    }
  });
}

var tl = gsap.timeline()

tl.to(".loader span",{
  x:-90,
  duration:2,
  opacity:0,
})
tl.to(".loader",{

  opacity:0,
  display:"none"
})

tl.to(".hello span",{
  opacity:1,
  color:"red",
  duration:1,
  stagger:0.4
})
tl.to(".hello span",{
  opacity:1,
  color:"white",
  duration:1,
  stagger:0.4
})

gsap.to("body",{
  opacity:1,
  duration:1,
  background:"#0e0e0e",
  scrollTrigger:{
      trigger:"#page4 ",
      scroller:"body",
      // markers:true,
      start:"top 90%",
      end:"top 30%",
      scrub:2
  }
})

gsap.to(".page-start,.sbtn",{
  opacity:1,
  scale:1,
  duration:1,
  color:"white",
  scrollTrigger:{
      trigger:"#page4 ",
      scroller:"body",
      // markers:true,
      start:"top 90%",
      end:"top 30%",
      scrub:2
  }
})
