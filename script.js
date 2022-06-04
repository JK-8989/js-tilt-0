const container = document.querySelector('.container');
const h1 = document.querySelector('h1');
let currentWidth = window.innerWidth;
console.log(currentWidth)
console.log(h1);

window.addEventListener('load', ()=>{
  if (currentWidth < 731 && currentWidth > 401) {
    container.style.top = '680px';
  } else if (currentWidth < 400 && currentWidth > 1){
    container.style.top = '925px';
  }else {
    container.style.top = '550px';
  }
 
  container.style.transform = 'translate(-50%, -80%)';
  // h1.style.opacity = '1';

  
});

const li = document.querySelectorAll('li');
const nav = document.querySelector('nav');

li.forEach((element) => {
  element.addEventListener('click', (e)=>{
    li.forEach((el) => {
      el.classList.remove('active')
    });

    element.classList.add('active');
    nav.style.setProperty('--left',element.offsetLeft+'px')
  });
});