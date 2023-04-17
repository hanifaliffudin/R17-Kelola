    $(".client-carousel").owlCarousel({
      loop: true,
      margin: 50,
      nav: true,
      autoplay: true,
      autoplayTimeout: 3000,
      responsive: {
        0: {
          items: 3,
        },
        600: {
          items: 4,
        },
        1000: {
          items: 6,
        },
      },
    });

    $(".sertifikasi-carousel").owlCarousel({
      loop: true,
      margin: 150,
      nav: true,
      // autoWidth: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 4000,
      navText: [
        '<a class="left carousel-control" data-slide="prev"><span class="icon-prev"></span></a>',
        '<a class="left carousel-control" data-slide="next"><span class="icon-next"></span></a>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 2,
        },
      },
    });
    $(".ahli-carousel").owlCarousel({
      loop: true,
      margin: 170,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 4000,
      navText: [
        '<a class="left carousel-control" data-slide="prev"><span class="icon-prev"></span></a>',
        '<a class="left carousel-control" data-slide="next"><span class="icon-next"></span></a>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 2,
        },
      },
    });