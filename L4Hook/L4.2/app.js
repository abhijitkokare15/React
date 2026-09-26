const div = document.querySelector('div');

const btn = document.querySelector('button')

let count =0;

btn.addEventListener("click",()=>
{
    count++;
    const p = document.querySelector('p');
    p.textContent=`counter:${count}`

})

