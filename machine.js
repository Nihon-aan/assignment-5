
// Button Maachine




const allBtn = document.getElementById('allBtn');
const filterButtons = document.querySelectorAll('.options button');
const optionsSelection = document.querySelector('.options');


const loadpost = () => {

    const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';

    fetch(url)
        .then((response) => response.json())
        .then((output) => showOutput(output));

}



function setActiveButton(selectedBtn) {

    filterButtons.forEach((btn) => {
        btn.classList.remove('btn-primary', 'text-white');
        btn.classList.add('bg-white', 'text-[#64748B]');

    });


    selectedBtn.classList.remove('bg-white', 'text-[#64748B]');
    selectedBtn.classList.add('btn-primary', 'text-white');

    loadpost();

}


optionsSelection.addEventListener('click', (event) => {

    const clickedBtn = event.target.closest('button');
    if (!clickedBtn) return;

    setActiveButton(clickedBtn);


});

window.addEventListener('DOMContentLoaded', () => {
    allBtn.click();
});









// "id": 1,
// "title": "Fix navigation menu on mobile devices",
// "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
// "status": "open",
// "labels": [
// "bug",
// "help wanted"
// ],
// "priority": "high",
// "author": "john_doe",
// "assignee": "jane_smith",
// "createdAt": "2024-01-15T10:30:00Z",
// "updatedAt": "2024-01-15T10:30:00Z"




function showOutput(outputs) {

    const container = document.getElementById('cards-container');
    container.innerHTML = "";



    const issueList = outputs.data;

    issueList.forEach((issue) => {

        let buttonsHTML = "";
        issue.labels.forEach((label) => {

            let btnStyle = "text-[#4A00FF] bg-[#ECE4FF] border-[#D8B4FE]";
            let icon = '<i class="fa-solid fa-tag"></i>';

            if (label.toLowerCase() === "bug") {
                btnStyle = "text-[#EF4444] bg-[#FEECEC] border-[#FECACA]";
                icon = '<i class="fa-solid fa-bug"></i>';
            } else if (label.toLowerCase() === "help wanted") {
                btnStyle = "text-[#D97706] bg-[#FFF8DB] border-[#FDE68A]";
                icon = '<i class="fa-regular fa-life-ring"></i>';
            } else if (label.toLowerCase() === "enhancement") {
                btnStyle = "text-[#00A96E] bg-[#E6F7F1] border-[#A7F3D0]";
                icon = '<i class="fa-solid fa-wand-magic-sparkles"></i>';
            }


            buttonsHTML += `<button class="${btnStyle} font-medium text-[12px] px-2 py-[6px] rounded-full border uppercase">${icon} ${label}</button>`;
        
    });


    let priorityStyle = "bg-[#F1F5F9] text-[#64748B]";

    if (issue.priority.toLowerCase() === "high") {
  priorityStyle = "bg-[#FEECEC] text-[#EF4444]";
} else if (issue.priority.toLowerCase() === "medium") {
  priorityStyle = "bg-[#FFF8DB] text-[#D97706]";
}



let borderColor = "border-[#00A96E]";
if(issue.status.toLowerCase()==="closed"){
    borderColor="border-[#A855F7]";
}
    const cards = document.createElement("div");

    cards.className = `card bg-white max-w-[250px] shadow-lg border-t-4 ${borderColor} flex flex-col`;

    cards.innerHTML = `

         

          <div class="issue-container  p-4 flex-1 flex flex-col">

          <div class="priority-container flex justify-between items-center mb-3">
            <div class="doted-round">
              <img src="B13-A5-Github-Issue-Tracker/assets/Open-Status.png" alt="">
            </div>

            <div class="priority py-[6px] px-[26px] ${priorityStyle} rounded-full">
              <p class="text-[12px]  font-medium">${issue.priority}</p>
            </div>
          </div>


          <h1 class="font-semibold text-[16px] text-[#1F2937] mb-2">${issue.title}</h1>

          <p class=" text-[12px] text-[#64748B] mb-3">${issue.description}</p>



          <div class="btn-container mt-auto flex gap-[4px] mb-4">

            ${buttonsHTML}
          </div>

          </div>


          <div class="author border-t border-[#E4E4E7] p-4">
            <p class="text-[12px] text-[#64748B] mb-2">${issue.author}</p>
            <p class="text-[12px] text-[#64748B] mb-2">${issue.createdAt}</p>
          </div>
        
        `;


    container.appendChild(cards);


});



}






























