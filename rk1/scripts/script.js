
let chair1 =document.querySelector('#chair1');
let chair2 =document.querySelector('#chair2');
let chair3 =document.querySelector('#chair3');
document.querySelector('.reveal1').addEventListener('click', event => {
        chair1.classList.add('myClass');
  })

  document.querySelector('.reveal2').addEventListener('click', event => {
    chair2.classList.add('myClass');
})

document.querySelector('.reveal3').addEventListener('click', event => {
    chair3.classList.add('myClass');
})
