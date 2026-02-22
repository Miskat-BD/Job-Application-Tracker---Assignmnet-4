function calculateCount() {
    total.innerText = allCards.children.length;
    interviewCount.innerHTML = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}

// Toggle
function toggleStyle(id){
    allFilterBtn.classList.remove('bg-[#3B82F6]','text-white');
    interviewFilterBtn.classList.remove('bg-[#3B82F6]','text-white');
    rejectedFilterBtn.classList.remove('bg-[#3B82F6]','text-white');

    const selected = document.getElementById(id);
    selected.classList.add('bg-[#3B82F6]','text-white')
    
}