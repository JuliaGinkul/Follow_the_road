function drive(start, end) {
    gsap.set("#car", {xPercent:-50, yPercent:60, transformOrigin:"50% 50%"});
    gsap.to("#car", {
        duration: 4,
        motionPath:{
            path:"#path",
            align: "#path",
            autoRotate: true,
            alignOrigin: [0.4, 0.4],
            start: end,
            end: start
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(MotionPathPlugin);
    drive(0, 1);
});