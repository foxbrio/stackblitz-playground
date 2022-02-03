console.log('Hello Carousel!');

//https://betterprogramming.pub/make-a-slideshow-with-automatic-and-manual-controls-using-html-css-and-javascript-b7e9305168f9

function init() {
  const items = document.querySelectorAll('.carousel-item');

  items.forEach((item, index) => {
    items[index].classList.remove('show-item');
    item.addEventListener('click', () => {
      items[index].classList.remove('show-item');
      if (index + 1 === items.length) {
        items[0].classList.add('show-item');
      } else {
        items[index + 1].classList.add('show-item');
      }
    });
  });

  items[0].classList.add('show-item');
}

const plusSlides = (val) => {
  const items = document.querySelectorAll('.carousel-item');
  items.forEach((item, index) => {
    if (item.classList.contains('show-item') === true) {
      items[index].classList.remove('show-item');
      if (index === items.length - 1) {
        items[0].classList.add('show-item');
      } else {
        if (val > 0) {
          items[index + val].classList.add('show-item');
        }
      }
    }
  });
};

setTimeout(() => {
  init();
}, 100);
