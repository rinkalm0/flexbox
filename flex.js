const container = document.querySelector('.container');
const justifyContent = document.querySelectorAll('.btn1 button');
const alignItems = document.querySelectorAll('.btn2 button');
const flexDirection = document.querySelectorAll('.btn3 button');

let justifyArr = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'];
let alignArr = ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'];
let directionArr = ['row', 'row-reverse', 'column', 'column-reverse'];

justifyContent.forEach((btn, indx) => {
  btn.addEventListener('click', () => {
    container.style.justifyContent = `${justifyArr[indx]}`;

    justifyContent.forEach((removeActive) => {
      removeActive.classList.remove('active')
    })

    btn.classList.add('active')
  })
})

alignItems.forEach((btn, indx) => {
    btn.addEventListener('click', () => {
      container.style.alignItems = `${alignArr[indx]}`;
  
      alignItems.forEach((removeActive) => {
        removeActive.classList.remove('active')
      });
  
      btn.classList.add('active')
    })
})
  
flexDirection.forEach((btn, indx) => {
    btn.addEventListener('click', () => {
      container.style.flexDirection = `${directionArr[indx]}`;
  
      flexDirection.forEach((removeActive) => {
        removeActive.classList.remove('active')
      })
  
      btn.classList.add('active')
    })
  });
  