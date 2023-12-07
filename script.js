var tl = gsap.timeline()

tl.from(".nav-left h3",{
    y: 10,
    stagger:0.1,
    delay:0.5,
    opacity:0
})

tl.from(".page2 .left",{
    x: 100,
    delay:0.5,
    opacity:0,
    scrollTrigger:{
        tigger:".page2 .left",
        start: "70% 20%",
        end:"bottom 0%",
        scrub:2,
    }
})
tl.from(".page2 .right",{
    x: -100,
    delay:0.5,
    opacity:0,
    scrollTrigger:{
        tigger:".page2 .left",
        start: "70% 20%",
        end:"bottom 0%",
        scrub:2,
    }
})
tl.from(".page3 .right3",{
    x: 160,
    delay:0.5,
    opacity:0,
    scrollTrigger:{
        tigger:".page3 .right3",
        // markers:true,
        start: "160% 50%",
        end:"bottom 0%",
        scrub:2,
    }
})
tl.from(".page3 .left3",{
    x: -160,
    delay:0.5,
    opacity:0,
    scrollTrigger:{
        tigger:".page3 .left3",
        // markers:true,
        start: "160% 50%",
        end:"bottom 0%",
        scrub:2,
    }
})
tl.from(".page4 .left4",{
    x: -160,
    delay:0.5,
    opacity:0,
    scrollTrigger:{
        tigger:".page4 .left4",
        // markers:true,
        start: "245% 50%",
        end:"bottom 0%",
        scrub:2,
    }
})
tl.from(".page4 .right4",{
    x: 160,
    delay:0.5,
    opacity:0,
    scrollTrigger:{
        tigger:".page4 .right4",
        // markers:true,
        start: "245% 50%",
        end:"bottom 0%",
        scrub:2,
    }
})
tl.from(".page5 .right5",{
    x: 160,
    delay:0.5,
    opacity:0,
    scrollTrigger:{
        tigger:".page5 .right5",
        // markers:true,
        start: "350% 50%",
        end:"bottom 0%",
        scrub:2,
    }
})
tl.from(".page5 .left5",{
    x: -160,
    delay:0.5,
    opacity:0,
    scrollTrigger:{
        tigger:".page5 .left5",
        // markers:true,
        start: "350% 50%",
        end:"bottom 0%",
        scrub:2,
    }
})
tl.from(".page6 .right6",{
    x: 160,
    delay:0.5,
    opacity:0,
    scrollTrigger:{
        tigger:".page6 .right6",
        // markers:true,
        start: "450% 60%",
        end:"bottom 0%",
        scrub:2,
    }
})
tl.from(".page7 .right7",{
    x: 160,
    delay:0.5,
    opacity:0,
    scrollTrigger:{
        tigger:".page7 .right7",
        // markers:true,
        start: "570% 60%",
        end:"bottom 0%",
        scrub:2,
    }
})



