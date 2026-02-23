function calculateCount() {
    const totalJobs = allCards.children.length;
    total.innerText = totalJobs;
    // console.log(totalJobs, total.innerText)

    // availableJob.innerText = allCards.children.length;
    interviewCount.innerHTML = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

    if (currentStatus == 'all-filter-btn') {
        availableJobs.innerText = `${totalJobs} jobs`
    }
}

// Toggle
function toggleStyle(id) {
    allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    interviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    rejectedFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');

    const selected = document.getElementById(id);
    selected.classList.add('bg-[#3B82F6]', 'text-white')

    currentStatus = id;
    // console.log(currentStatus)

    if (id == 'interview-filter-btn') {
        allCards.classList.add('hidden');
        filteredSection.classList.remove('hidden')
        availableJobs.innerHTML = `${interviewList.length} of ${allCards.children.length} jobs`

        renderInterview()


    }
    else if (id == 'all-filter-btn') {
        allCards.classList.remove('hidden');
        filteredSection.classList.add('hidden');

        availableJobs.innerHTML = `${allCards.children.length} jobs`

    }
    else if (id == 'rejected-filter-btn') {
        allCards.classList.add('hidden');
        filteredSection.classList.remove('hidden')
        availableJobs.innerHTML = `${rejectedList.length} of ${allCards.children.length} jobs `;

        renderRejected()
    }

}
