let total = document.getElementById('total-jobs');
let interviewCount = document.getElementById('total-interview');
let rejectedCount = document.getElementById('total-rejected');
let allCards = document.getElementById("all-cards");
let buttons = document.getElementById('buttons');
let mainContainer = document.querySelector('main');
let filteredSection = document.getElementById('filtered-section');
let interviewBtn = document.getElementById('interview-btn');

const allFilterBtn = document.getElementById('all-filter-btn')
const interviewFilterBtn = document.getElementById('interview-filter-btn')
const rejectedFilterBtn = document.getElementById('rejected-filter-btn')

let interviewList = [];
let rejectedList = [];

// Calculate the counters
calculateCount();

mainContainer.addEventListener('click', function (event) {
    console.log(event.target.classList.contains('interview-btn'))
    if (event.target.classList.contains('interview-btn')) {
        const parent = event.target.parentNode.parentNode;
        const companyName = parent.querySelector('.company-name').innerText;

        const position = parent.querySelector('.position').innerText;
        const salary = parent.querySelector('.salary').innerText;
        const condition = parent.querySelector('.condition');
        const description = parent.querySelector('.description').innerText;

        const jobCardInfo = {
            companyName,
            position,
            salary,
            condition,
            description
        };
        parent.querySelector('.condition').innerText = 'Interview'
        condition.classList.remove('text-[#002C5C]', 'bg-[#EEF4FF]','btn-soft')
        condition.classList.add('btn-success')

        const jobAdded = interviewList.find(job => job.companyName == jobCardInfo.companyName);

        if (!jobAdded) {
            interviewList.push(jobCardInfo)
        }
        renderInterview();
    }
})

function renderInterview() {
    filteredSection.innerHTML = '';

    for (const i of interviewList) {
        console.log(i)
        let div = document.createElement('div');
        div.className = 'p-6 rounded-md mb-4 flex justify-between bg-[#FFFFFF] border-1 border-gray-200'
        div.innerHTML = `
             <div class="">
                    <h1 class="company-name text-[#002C5C] text-[18px] font-semibold">Mobile First Corp</h1>
                    <p class="position text-[#64748B] mb-5">React Native Developer</p>
                    <p class="salary text-[14px] mb-5 text-[#64748B]">Remote
                        •
                        Full-time
                        •
                        $130,000 - $175,000</p>
                   <button class="condition text-[#002C5C] btn btn-soft bg-[#EEF4FF]">NOT APPLIED</button>
                    <p class="description text-[14px] text-[#323B49] my-5">Build cross-platform mobile applications using React
                        Native.
                        Work on products used by millions of users worldwide.</p>

                    <!-- Buttons- Interview and Rejected -->
                    <div class="flex gap-2">
                        <button id="interview-btn" class="btn btn-outline btn-success">INTERVIEW</button>
                        <button id="rejected-btn" class="btn btn-outline btn-error">REJECTED</button>
                    </div>
                </div>

                <!-- Right Side -->
                <div class="">
                    <button class="btn rounded-full"><i class="fa-regular fa-trash-can"></i></button>
                </div>
        `
    }
}
