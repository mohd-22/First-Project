new Swiper('.card-wrapper', {
    spaceBetween: 20,
    grabCursor: true, 
    speed: 600,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

   
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    
    breakpoints: {
        0: { slidesPerView: 1 },
        480: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },
  
    touchEventsTarget: 'container',
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
});
window.onload = function() {
      const sectionToScrollTo = document.getElementById("work-process");
    if (sectionToScrollTo) {
        sectionToScrollTo.scrollIntoView({ behavior: "smooth" });
    }
};
function showsidebar() {

    var y = document.getElementById('llo');
    var x = document.getElementById('main-nav');
    var z = document.getElementById('menu-but');
    var a = document.getElementById('close-but');
    var b = document.getElementById('sidebar');
    b.style.display = 'block';
    a.style.display = 'block';
    z.style.display = 'none';
    x.style.backgroundColor = '#478c0d';
    y.src = 'img/white-full-logo.svg';
    // document.querySelector('#menu-but').style.display = 'block';
}
function hidesidebar() {
    var y = document.getElementById('llo');
    var x = document.getElementById('main-nav');
    var z = document.getElementById('menu-but');
    var a = document.getElementById('close-but');
    var b = document.getElementById('sidebar');
    b.style.display = 'none';
    a.style.display = 'none';
    z.style.display = 'block';
    x.style.backgroundColor = 'transparent';
    y.src = 'img/headerLogo.svg';
    
}
window.addEventListener('resize', function () {

    if (window.innerWidth > 840) {
        hidesidebar();

    }
});
window.addEventListener('resize', function () {
    if (window.innerWidth > 840) {
        document.getElementById('menu-but').style.display = 'none';
    } else {
        document.getElementById('menu-but').style.display = 'block';
    }
});