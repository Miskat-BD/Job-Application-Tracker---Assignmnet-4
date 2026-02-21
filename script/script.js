let total = document.getElementById('total-jobs');
let interviewCount = document.getElementById('total-interview');
let rejectedCount = document.getElementById('total-rejected');
let allCards = document.getElementById("all-cards");
let buttons = document.getElementById('buttons');
let mainContainer = document.querySelector('main');

let interviewList = [];
let rejectedList = [];

// Calculate the counters
calculateCount();

function toggleStyle(id){
    console.log("clicked",)
}