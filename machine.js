
// Button Maachine




const allBtn = document.getElementById('allBtn');
const openBtn = document.getElementById('openBtn');
const closedBtn = document.getElementById('closedBtn');



const filterButtons = document.querySelectorAll('.options button');


function setActiveButton(selectedBtn){

    filterButtons.forEach((btn)=>{
        btn.classList.remove('btn-primary', 'text-white');
        btn.classList.add('bg-white', 'text-[#64748B]');

    });


    selectedBtn.classList.remove('bg-white', 'text-[#64748B]');
    selectedBtn.classList.add('btn-primary', 'text-white');
}


allBtn.addEventListener('click',()=>{
    console.log('all clicked');
    setActiveButton(allBtn);

});

openBtn.addEventListener('click',()=>{
    console.log('open clicked');
    setActiveButton(openBtn);

});

closedBtn.addEventListener('click',()=>{
    console.log('closed clicked');
    setActiveButton(closedBtn);

});

window.addEventListener('DOMContentLoaded', ()=>{
    allBtn.click();
});





// allBtn.addEventListener('click', ()=>{
// console.log('Button Clicked');
// allBtn.classList.remove('bg-white');
// allBtn.classList.add('btn-primary', 'text-white');

// });



// openBtn.addEventListener('click', ()=>{
// console.log('Open Clicked');
// openBtn.classList.remove('bg-white');
// openBtn.classList.add('btn-primary', 'text-white');

// });



// closedBtn.addEventListener('click', ()=>{
// console.log('Closed  Clicked');
// closedBtn.classList.remove('bg-white');
// closedBtn.classList.add('btn-primary', 'text-white');

// });