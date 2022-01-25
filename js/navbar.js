    var nav = document.querySelector('nav');

    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 200) {
        nav.classList.add('nvs', 'shadow');
      } else {
        nav.classList.remove('nvs', 'shadow');
      }
    });
