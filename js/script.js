if (window.SimpleSlide) { //está verificando se existe o simple slide

    new SimpleSlide({
        slide: "quote",
        time: 5000
    })

    new SimpleSlide({
        slide: "portifolio",
        time: 5000,
        nav: true
    })
}

if (window.SimpleAnime) {
    new SimpleAnime();
}