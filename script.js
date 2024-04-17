    //======== slider
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
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
    
    //======== phone size
    var header = document.getElementById("myDIV");
    var btns = header.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("actived");
            current[0].className = current[0].className.replace(" actived", "");
            this.className += " actived";
        });
    }

    //======== desktop size
    var header = document.getElementById("mydiv");
    var btns = header.getElementsByClassName("btnn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("activedes");
            current[0].className = current[0].className.replace(" activedes", "");
            this.className += " activedes";
        });
    }
    
    //======== desktop size
    const firstDest = document.querySelector.bind(document),
        secondDest =  document.querySelectorAll.bind(document);

    const clickContent = secondDest ('.click-item'),
        cardContent = secondDest ('.card-item');

    clickContent.forEach((click, index) => {
        const carded = cardContent[index]
        click.onclick = function () {
            firstDest('.click-item.active').classList.remove('active')
            firstDest('.card-item.active').classList.remove('active')
            this.classList.add ('active')
            carded.classList.add ('active')
        }
    })


    //======== phone size
    const $ = document.querySelector.bind(document),
        $$ = document.querySelectorAll.bind(document);

    const titleContent = $$('.title-item'),
        boxContent = $$('.box-item');

    titleContent.forEach((title, index) => {
        const boxed = boxContent[index]
        title.onclick = function () {
            $('.title-item.active').classList.remove('active')
            $('.box-item.active').classList.remove('active')
            this.classList.add('active')
            boxed.classList.add('active')
        }
    })