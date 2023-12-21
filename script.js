




checkScreenSize();

// Check on window resize
window.addEventListener('resize', checkScreenSize);

function checkScreenSize() {
  if (window.matchMedia('(max-width: 600px)').matches) {

    var crsr = document.querySelector(".cursor")
    var main = document.querySelector(".main")
    
    main.addEventListener("mousemove" , function(dets){
        crsr.style.left = dets.x  + 5+"px"
        crsr.style.top = dets.y + 5  +"px"
    })
     
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".page1 h1",
            scroller: ".main",
            // markers:true,
            start: "top 2%",
            end: "top 0",
            scrub: 3
        }
    })
    tl.to(".page1 h1", {
        x: -50,
    }, "anim")
    tl.to(".page1 h2", {
        x: 50
    }, "anim")
    tl.to(".page1 video", {
        width: "90%"
    }, "anim")
    
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page1 h1",
            scroller: ".main",
            // markers:true,
            start: "top -30%",
            end: "top -50%",
            scrub: 3
        }
    })
    tl2.to(".main", {
        backgroundColor: "#fff",
    })
    
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page1 h1",
            scroller: ".main",
            start: "top -150%",
            end: "top -190%",
            scrub: 3
        }
    })
    tl3.to(".main", {
        backgroundColor: "#000",
    })
    
    var boxes = document.querySelectorAll(".box")
    boxes.forEach(function(elem){
        elem.addEventListener("mouseenter", function(){
            var att = elem.getAttribute("data-image")
            crsr.style.width ="300px"
            crsr.style.height ="250px"
            crsr.style.borderRadius = "0"
            crsr.style.backgroundImage = `url(${att})`
        })
        elem.addEventListener("mouseleave", function(){
            crsr.style.width ="20px"
            crsr.style.height ="20px"
            crsr.style.borderRadius = "50%"
            elem.style.backgroundColor = "transparent"
            crsr.style.backgroundImage = `none`
        })
    })
    
    
    const mainmenu = document.querySelector('.mainmenu');
    const closemenu = document.querySelector('.closemenu');
    const openmenu = document.querySelector('.openmenu'); 
    
    openmenu.addEventListener('click', show);
    closemenu.addEventListener('click', close);
    
    function show() {
        mainmenu.style.display = 'flex';
        mainmenu.style.top= '0';
    }
    
    function close() {
        mainmenu.style.top = '-100%';
    }
    
    
    
  } else {
    function innit() {
        gsap.registerPlugin(ScrollTrigger);
    
        const locoScroll = new LocomotiveScroll({
            el: document.querySelector(".main"),
            smooth: true
        });
    
        locoScroll.on("scroll", ScrollTrigger.update);
    
        ScrollTrigger.scrollerProxy(".main", {
            scrollTop(value) {
                return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
    
            pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
        });
    
        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
        ScrollTrigger.refresh();
    }
    
    innit()
    
    var crsr = document.querySelector(".cursor")
    var main = document.querySelector(".main")
    
    main.addEventListener("mousemove" , function(dets){
        crsr.style.left = dets.x  + 5+"px"
        crsr.style.top = dets.y + 5  +"px"
    })
     
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".page1 h1",
            scroller: ".main",
            // markers:true,
            start: "top 27%",
            end: "top 0",
            scrub: 3
        }
    })
    tl.to(".page1 h1", {
        x: -100,
    }, "anim")
    tl.to(".page1 h2", {
        x: 100
    }, "anim")
    tl.to(".page1 video", {
        width: "90%"
    }, "anim")
    
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page1 h1",
            scroller: ".main",
            // markers:true,
            start: "top -105%",
            end: "top -120%",
            scrub: 3
        }
    })
    tl2.to(".main", {
        backgroundColor: "#fff",
    })
    
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page1 h1",
            scroller: ".main",
            start: "top -320%",
            end: "top -340%",
            scrub: 3
        }
    })
    tl3.to(".main", {
        backgroundColor: "#000",
    })
    
    var boxes = document.querySelectorAll(".box")
    boxes.forEach(function(elem){
        elem.addEventListener("mouseenter", function(){
            var att = elem.getAttribute("data-image")
            crsr.style.width ="300px"
            crsr.style.height ="250px"
            crsr.style.borderRadius = "0"
            crsr.style.backgroundImage = `url(${att})`
        })
        elem.addEventListener("mouseleave", function(){
            crsr.style.width ="20px"
            crsr.style.height ="20px"
            crsr.style.borderRadius = "50%"
            elem.style.backgroundColor = "transparent"
            crsr.style.backgroundImage = `none`
        })
    })
    
    
    const mainmenu = document.querySelector('.mainmenu');
    const closemenu = document.querySelector('.closemenu');
    const openmenu = document.querySelector('.openmenu'); 
    
    openmenu.addEventListener('click', show);
    closemenu.addEventListener('click', close);
    
    function show() {
        mainmenu.style.display = 'flex';
        mainmenu.style.top= '0';
    }
    
    function close() {
        mainmenu.style.top = '-100%';
    }
    
    
    
  }
}