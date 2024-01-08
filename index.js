//  Hamburger Function ****************
function myFunction() {
    var x = document.getElementById("navi");
    if (x.style.display == "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }

}


// Our Impact ********************
document.addEventListener('DOMContentLoaded', function () {
    var counters = document.querySelectorAll('.statistic-counter');
    var delay = 10;
    var time = 2000;

    counters.forEach(function (counter) {
        var targetValue = parseInt(counter.innerText);
        var startValue = 0;
        var increment = targetValue / (time / delay);
        var current = startValue;

        var timer = setInterval(function () {
            current += increment;
            counter.innerText = Math.round(current);

            if (current >= targetValue) {
                clearInterval(timer);
                counter.innerText = targetValue;
            }
        }, delay);
    });
});


// Modal  Our Team ******************
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("gallery-item")) {
        const src = e.target.getAttribute("src")
        console.log(src)
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'))
        myModal.show();
    }
})


// Gallery swiper 
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

