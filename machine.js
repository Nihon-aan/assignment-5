
// Button Maachine




const allBtn = document.getElementById('allBtn');
const filterButtons = document.querySelectorAll('.options button');
const optionsSelection = document.querySelector('.options');


function setActiveButton(selectedBtn) {

    filterButtons.forEach((btn) => {
        btn.classList.remove('btn-primary', 'text-white');
        btn.classList.add('bg-white', 'text-[#64748B]');

    });


    selectedBtn.classList.remove('bg-white', 'text-[#64748B]');
    selectedBtn.classList.add('btn-primary', 'text-white');
}


optionsSelection.addEventListener('click', (event) => {

    const clickedBtn = event.target.closest('button');
    if (!clickedBtn) return;

    setActiveButton(clickedBtn);


});

window.addEventListener('DOMContentLoaded', () => {
    allBtn.click();
});





const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';

fetch(url)
.then((response) => response.json())
.then((output) =>showOutput(output));



function showOutput(outputs){

   const issueList =outputs.data;

   issueList.forEach((issue)=>{
    console.log(issue.id);
    console.log(issue.title);
    console.log(issue.description);
    console.log(issue.author);
   
   });



}






























