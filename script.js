ScrollTrigger.normalizeScroll(true);
ScrollTrigger.defaults({ ignoreMobileResize: true });

gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  smoothMobile: 0.1,
  
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed",
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();


function page1(){
  const t1=gsap.timeline();
  t1.from('#txt1 h1',{
    y:100,
    opacity:0,
    duration:0.5,
  })
  t1.from('#txt2 h1',{
    y:100,
    opacity:0,
    duration:0.5,
  })
  t1.from('#txt3 h1',{
    y:100,
    opacity:0,
    duration:0.5,
  })
  t1.from('#txt3',{
    width:'0%',
  })
  t1.from('#img1',{
    x:-500,
  })
  t1.from('#img2',{
    y:-500,
  })
  t1.from('#img3',{
    x:500,
  })
  t1.from('#img4',{
    y:500,
  })

}
page1();

function page2(){
  const t1=gsap.timeline();
  const media = window.matchMedia('(max-width: 600px)');
  
  gsap.to('#page2',{
    scrollTrigger:{
      trigger:'#page2',
      scroller:'#main',
      pin:true,
      
    }
  })
  t1.to('#page2 #text',{
    x:-200,
    duration:3,
    scrollTrigger:{
      trigger:'#text h1',
      scroller:'#main',
      scrub:2,
      
      
    }
  })
  if(media.matches){
    gsap.to('#card1',{
      height:'35%',
     
      duration:2,
      scrollTrigger:{
        trigger:'#card1',
        scroller:'#main',
        start:'top 60%',
        scrub:2,
        
      }
     
    })
    gsap.to('#card2',{
      height:'30%',
    
      duration:2,
      scrollTrigger:{
        trigger:'#card2',
        scroller:'#main',
        start:'top 60%',
        scrub:2,
        
      }
  })
  gsap.to('#card3',{
    height:'35%',
    duration:2,
    scrollTrigger:{
      trigger:'#card3',
      scroller:'#main',
      start:'top 60%',
      scrub:2,
      
    }
  })
  }
  else{
    gsap.to('#card1',{
      height:'70%',
     
      duration:2,
      scrollTrigger:{
        trigger:'#card1',
        scroller:'#main',
        start:'top 60%',
        scrub:2,
        
      }
     
    })
    gsap.to('#card2',{
      height:'70%',
    
      duration:2,
      scrollTrigger:{
        trigger:'#card2',
        scroller:'#main',
        start:'top 60%',
        scrub:2,
        
      }
  })
  gsap.to('#card3',{
    height:'70%',
    duration:2,
    scrollTrigger:{
      trigger:'#card3',
      scroller:'#main',
      start:'top 60%',
      scrub:2,
      
    }
  })
  }
  
  
 
}
page2();
function page3() {
}
function page3(){
  const t1=gsap.timeline();
  t1.to('#page3',{
    
    scrollTrigger:{
      trigger:'#page3',
      scroller:'#main',
      pin:true,
      scrub:2,
      
    }
  })
  t1.to('.item',{
    duration:10,
    transform:'translate(-300%)',
    scrollTrigger:{
      trigger:'.item',
      scroller:'#main',
      scrub:5,
      start:'top 0%',
      end:'top -100%'
    }
  })
}
page3();

function page4(){
  const t1=gsap.timeline();
  const media = window.matchMedia('(max-width: 600px)');
  if(media.matches){
    t1.to('#page4',{
    
      scrollTrigger:{
        trigger:'#page4',
        scroller:'#main',
        pin:true,
        
        
      }
    })
    t1.to('#page4 h1',{
      duration:3,
      scale:2,
      opacity:0,
      scrollTrigger:{
        trigger:'#page4 h1',
        scroller:'#main',
        start:'top 0',
        scrub:2,
      }
    })
  }
  else{
    t1.to('#page4',{
    
      scrollTrigger:{
        trigger:'#page4',
        scroller:'#main',
        pin:true,
        
        
      }
    })
    t1.to('#page4 h1',{
      duration:3,
      scale:2,
      opacity:0,
      width:0,
      scrollTrigger:{
        trigger:'#page4 h1',
        scroller:'#main',
        start:'top 0',
        scrub:2,
      }
    })
  }
 
  
}
page4();

function page5(){
  const t1=gsap.timeline();
  t1.to('#page5 #text',{
    x:-200,
    duration:3,
    scrollTrigger:{
      trigger:'#page5 h1',
      scroller:'#main',
      scrub:2,
      
    }
  })
}
page5();
