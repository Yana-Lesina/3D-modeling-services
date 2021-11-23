const modal = () => {
  const modal = document.querySelector('.popup');
  const btns = document.querySelectorAll('.popup-btn');
  const modalContent = modal.querySelector('.popup-content')

  let inter1 //для запуска/остановки requestAnimationFrame
  let num = 0 // изменяет  modal.style.top, т.е. выдвигает окно на экран
  let progress //значение прогресса анимации и её отрисовка

  //анимация появления модального окна
  const addModalContent = () => {

    if(num <= 100 ) {
      num += 7
      inter1 = requestAnimationFrame(addModalContent)
      modalContent.style.top = `${num}px`

    } else if (num > 100 ) {
      cancelAnimationFrame(inter1)
    }
  };

  //анимация исчезновения модального окна
  const animate = ({duration, draw, timing}) => {
    let start = performance.now();

    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;

      progress = timing(1.5, timeFraction)

      draw(progress);

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      } else {
        modal.style.display = 'none'
        num = 0
      }
    });
  };

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.style.display = 'block'    
      
      if(document.body.clientWidth > 780) {
        addModalContent()
      } else {
        modalContent.style.top = 100 + 'px'
      }
    });
  });

  modal.addEventListener('click', (e) => {
    if(!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      
      if(document.body.clientWidth > 780) {
        animate({
          duration: 1000,
          timing: function back(x, timeFraction) {
            return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x)
          },
          draw: function () {
            modalContent.style.top = 100 + progress * 550 + 'px'
            //100 здесь - это те самые 100px открытого modalContent
          }
        })
      } else {
        modal.style.display = 'none' 
        num = 0
      } 
    }
  })
};

export default modal