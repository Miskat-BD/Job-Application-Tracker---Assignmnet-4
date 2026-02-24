let total = document.getElementById('total-jobs');
let availableJob = document.getElementById('a-job');
let availableJobs = document.getElementById('a-jobs');
let interviewCount = document.getElementById('total-interview');
let rejectedCount = document.getElementById('total-rejected');
let allCards = document.getElementById("all-cards");
let buttons = document.getElementById('buttons');
let mainContainer = document.querySelector('main');
let filteredSection = document.getElementById('filtered-section');
let interviewBtn = document.getElementById('interview-btn');
let noJobs = document.getElementById('no-jobs');

const allFilterBtn = document.getElementById('all-filter-btn')
const interviewFilterBtn = document.getElementById('interview-filter-btn')
const rejectedFilterBtn = document.getElementById('rejected-filter-btn')

let interviewList = [];
let rejectedList = [];
let currentStatus = 'all-filter-btn';
// console.log(interviewCount.innerText, 'of', availableJobs.innerText, 'jobs')
// Calculate the counters
calculateCount();




mainContainer.addEventListener('click', function (event) {
    // console.log(event.target.classList.contains('interview-btn'))
    if (event.target.classList.contains('interview-btn')) {
        const parent = event.target.parentNode.parentNode;
        const companyName = parent.querySelector('.company-name').innerText;

        const position = parent.querySelector('.position').innerText;
        const salary = parent.querySelector('.salary').innerText;
        const condition = parent.querySelector('.condition').innerText;
        const description = parent.querySelector('.description').innerText;

        const conditionBtn = parent.querySelector('.condition');
        conditionBtn.innerText = 'Interview';
        conditionBtn.classList.remove('text-[#002C5C]', 'bg-[#EEF4FF]', 'btn-soft', 'btn-error')
        conditionBtn.classList.add('btn-success')

        const jobCardInfo = {
            companyName,
            position,
            salary,
            condition: "Interview",
            description
        };

        const jobAdded = interviewList.find(job => job.companyName == jobCardInfo.companyName);

        if (!jobAdded) {
            interviewList.push(jobCardInfo)
        }

        rejectedList = rejectedList.filter(job => job.companyName != jobCardInfo.companyName)



        if (currentStatus == "rejected-filter-btn") {
            renderRejected();
        }



    }
    else if (event.target.classList.contains('rejected-btn')) {
        const parent = event.target.parentNode.parentNode;
        const companyName = parent.querySelector('.company-name').innerText;

        const position = parent.querySelector('.position').innerText;
        const salary = parent.querySelector('.salary').innerText;
        const condition = parent.querySelector('.condition').innerText;
        const description = parent.querySelector('.description').innerText;

        const conditionBtn = parent.querySelector('.condition');
        conditionBtn.innerText = 'Rejected';
        conditionBtn.classList.remove('text-[#002C5C]', 'bg-[#EEF4FF]', 'btn-soft', 'btn-success')
        conditionBtn.classList.add('btn-error')

        const jobCardInfo = {
            companyName,
            position,
            salary,
            condition: "Rejected",
            description
        };

        const jobAdded = rejectedList.find(job => job.companyName == jobCardInfo.companyName);

        if (!jobAdded) {
            rejectedList.push(jobCardInfo)

        }

        interviewList = interviewList.filter(job => job.companyName != jobCardInfo.companyName)



        if (currentStatus == "interview-filter-btn") {
            renderInterview();

        }



    }
    else if (event.target.classList.contains('delete-btn')) {
        const parent = event.target.parentNode.parentNode;
        const companyName = parent.querySelector('.company-name').innerText;


        parent.remove();
        rejectedList = rejectedList.filter(job => job.companyName != companyName)
        interviewList = interviewList.filter(job => job.companyName != companyName)

        // calculateCount();
       

        if (currentStatus == 'interview-filter-btn') {
            renderInterview();
        }
        else if (currentStatus == 'rejected-filter-btn') {
            renderRejected();
        }

        if (allCards.children.length == 0) {
            noJobs.classList.remove('hidden')
            allCards.classList.add('hidden');
            filteredSection.classList.add('hidden');

        }

    }

    calculateCount();
})

function renderInterview() {
    filteredSection.innerHTML = '';

    if (interviewList.length === 0) {
        noJobs.classList.remove('hidden');
        filteredSection.classList.add('hidden');
        availableJobs.innerHTML = `${interviewList.length} of ${allCards.children.length} jobs`
        return;
    } else {
        noJobs.classList.add('hidden');
        filteredSection.classList.remove('hidden');
    }

    for (const i of interviewList) {
        // console.log(i.companyName)
        let div = document.createElement('div');

        div.className = 'p-6 rounded-md mb-4 flex justify-between bg-[#FFFFFF] border-1 border-gray-200'
        div.innerHTML = `
             <div class="">
                    <h1 class="company-name text-[#002C5C] text-[18px] font-semibold">${i.companyName}</h1>
                    <p class="position text-[#64748B] mb-5">${i.position}</p>
                    <p class="salary text-[14px] mb-5 text-[#64748B]">${i.salary}</p>
                   <button class="condition btn btn-success">${i.condition}</button>
                    <p class="description text-[14px] text-[#323B49] my-5">${i.description}</p>

                    <!-- Buttons- Interview and Rejected -->
                    <div class="flex gap-2">
                        <button id="interview-btn" class="interview-btn btn btn-outline btn-success">INTERVIEW</button>
                        <button id="rejected-btn" class="rejected-btn btn btn-outline btn-error">REJECTED</button>
                    </div>
                </div>

                <!-- Right Side -->
                <div class="">
                    <button class="btn delete-btn rounded-full"><i class="fa-regular fa-trash-can pointer-events-none"></i></button>
                </div>
        `
        filteredSection.appendChild(div)

    }
    calculateCount();
}
function renderRejected() {
    filteredSection.innerHTML = '';

     if (rejectedList.length === 0) {
        noJobs.classList.remove('hidden');
        filteredSection.classList.add('hidden');
        availableJobs.innerHTML = `${rejectedList.length} of ${allCards.children.length} jobs `;

        return;
    } else {
        noJobs.classList.add('hidden');
        filteredSection.classList.remove('hidden');
    }
    
    for (const i of rejectedList) {

        let div = document.createElement('div');

        div.className = 'p-6 rounded-md mb-4 flex justify-between bg-[#FFFFFF] border-1 border-gray-200'
        div.innerHTML = `
             <div class="">
                    <h1 class="company-name text-[#002C5C] text-[18px] font-semibold">${i.companyName}</h1>
                    <p class="position text-[#64748B] mb-5">${i.position}</p>
                    <p class="salary text-[14px] mb-5 text-[#64748B]">${i.salary}</p>
                   <button class="condition btn btn-error">${i.condition}</button>
                    <p class="description text-[14px] text-[#323B49] my-5">${i.description}</p>

                    <!-- Buttons- Interview and Rejected -->
                    <div class="flex gap-2">
                        <button id="interview-btn" class="interview-btn btn btn-outline btn-success">INTERVIEW</button>
                        <button id="rejected-btn" class="rejected-btn btn btn-outline btn-error">REJECTED</button>
                    </div>
                </div>

                <!-- Right Side -->
                <div class="">
                    <button class="btn delete-btn rounded-full"><i class="fa-regular fa-trash-can pointer-events-none"></i></button>
                </div>
        `
        filteredSection.appendChild(div)
    }
    calculateCount();

}

