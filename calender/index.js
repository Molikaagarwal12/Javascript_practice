const monthIndex = new Date().getMonth();

const monthEl = document.querySelector(".date h1");
const dateEl = document.querySelector(".date p");
const daysE1 = document.querySelector(".days");

const lastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthIndex, 1).getDay()-1;

const date = new Date();
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

monthEl.innerText = months[monthIndex];
dateEl.innerText = date.toDateString();

let days = "";

for(let i=firstDay; i>0;i--){
    days+=`<div class"empty"></div>`;
}
for (let i = 1; i <= lastDay; i++) {
    if(i==new Date().getDate()) {
        days += `<div class="today">${i}</div>`;
    }else
   days += `<div>${i}</div>`;
}

daysE1.innerHTML = days;
