document.addEventListener('DOMContentLoaded', (event) => {
    const element = document.getElementById('admireDiv');

    element.addEventListener('mouseover', () => {
        element.style.backgroundColor = '#f8edaa';
        element.style.color = '#ad9159';
    });

    element.addEventListener('mouseout', () => {
        element.style.backgroundColor = '';
        element.style.color = '';
    });
});

let labl = document.querySelector("#labelc");
let inp = document.querySelector("#inputc");

let btnc = document.querySelector("#cambio");
btnc.addEventListener("click",function(){
    labl.textContent = inp.value;
})