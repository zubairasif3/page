// Carousel
jQuery(".carousel0").owlCarousel({
    autoplay: false,
    rewind: false,
    loop: true,
    /* use rewind if you don't want loop */
    margin: 0, 
    /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: false,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: false,
    dots: true,
    items: 1,
  });


//   document.addEventListener('DOMContentLoaded', () => {
//     const showButtonsBtn = document.getElementById('showButtonsBtn');
//     const buttonContainer = document.getElementById('buttonContainer');

//     showButtonsBtn.addEventListener('click', (e) => {
//         e.preventDefault();
//         buttonContainer.classList.toggle('hidden');
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
  const showButtonsBtn = document.getElementById('showButtonsBtn');
  const buttonContainer = document.getElementById('buttonContainer');
  const buttons = buttonContainer.getElementsByClassName('button-item');

  showButtonsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      let anyVisible = false;
      for (let i = 0; i < buttons.length; i++) {
          buttons[i].classList.toggle('visible');
          if (buttons[i].classList.contains('visible')) {
              anyVisible = true;
          }
      }
      if (anyVisible) {
          showButtonsBtn.classList.add('active');
      } else {
          showButtonsBtn.classList.remove('active');
      }
  });
});

