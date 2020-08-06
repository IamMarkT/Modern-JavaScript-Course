// const para = document.querySelector('body > h1');

// console.log(para);

const paras = document.querySelectorAll('p');
// paras is a nodelist


// paras.forEach(para =>{
//     console.log(para);
// })
// console.log(paras[2]);

const errors = document.querySelectorAll('.error');
errors.forEach(error => {
    console.log(error);
})
