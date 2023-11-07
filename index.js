let reps = [
    {
        rank: 10,
        name: 'David',
        percentage: 28.57

    },
    {
        rank: 10,
        name: 'Muhammad',
        percentage: 0

    },
    {

        rank: 10,
        name: 'Scott',
        percentage: 0

    },
    {

        rank: 10,
        name: 'Neil',
        percentage: 20

    },
    {

        rank: 10,
        name: 'Ryan',
        percentage: 25
    },
    {

        rank: 10,
        name: 'Kenyatta',
        percentage: 28.57

    },
    {

        rank: 10,
        name: 'Andrew',
        percentage: 40
    },
    {

        rank: 10,
        name: 'Rakib',
        percentage: 0
    },
    {

        rank: 10,
        name: 'Andrae',
        percentage: 37.50
    },
    {

        rank: 10,
        name: 'Aj',
        percentage: 50
    }

]
const navListItems = document.getElementsByClassName("nav")
const navListHead = document.getElementById("nav-list-head");
const docListHead = document.getElementById("doc-list-head");
const navList = document.getElementById("nav-list");
const docList = document.getElementById("doc-list");
const nav = document.querySelector("nav");
const navSpan = document.getElementById("nav-span");
const docSpan = document.getElementById("doc-span");
const table = document.querySelector("tbody");
const nav1 = document.getElementById("nav1");
const nav2 = document.getElementById("nav2");
const nav3 = document.getElementById("nav3");
const nav4 = document.getElementById("nav4");

navListHead.addEventListener('click', () => {
    if (navList.hidden === false) {
        /* setTimeout(()=>{
            setTimeout(()=>{
            nav4.style.transition = "opacity 5s"
            }
            )
            nav4.style.display = "none";
            console.log("test");
        }, 0);
        setTimeout(()=>{
            nav3.style.display = "none";
            console.log("test");
        }, 25);
        setTimeout(()=>{
            nav2.style.display = "none";
            console.log("test");
        }, 50);
        setTimeout(()=>{
            nav1.style.display = "none";
            console.log("test");
        }, 75);
        */
        navList.hidden = true;
        navSpan.style.rotate = "180deg";
        navSpan.style.bottom = "5px"
    } else if (navList.hidden === true) {
        navList.hidden = false;
        navSpan.style.rotate = "0deg";
        navSpan.style.bottom = "0px";
    }
})

docListHead.addEventListener('click', () => {
    if (docList.hidden === false) {
        docSpan.style.rotate = "180deg";
        docSpan.style.bottom = "5px";
        docList.hidden = true;
    } else if (docList.hidden === true) {
        docList.hidden = false;
        docSpan.style.rotate = "0deg";
        docSpan.style.bottom = "0px";
    }
})

let mobile = window.matchMedia("(max-width: 1170px)");

function windowCheck(x) {
    if (x.matches) {
        docSpan.style.rotate = "180deg";
        navSpan.style.rotate = "180deg";
        docSpan.style.bottom = "0px";
        navSpan.style.bottom = "0px";
        navList.hidden = true;
        docList.hidden = true;
        
    } else {
        navSpan.style.bottom = "5px"
        docSpan.style.bottom = "5px";
        navListItems.hidden = false;
        docList.hidden = false;
        docSpan.style.rotate = "0deg";
        navSpan.style.rotate = "0deg";
    }
}


windowCheck(mobile);


let sortedReps = reps.sort(
    (rep1, rep2) => (rep1.percentage < rep2.percentage) ? 1 : (rep1.percentage > rep2.percentage) ? -1 : 0);


function changeRank() {
    for (let i = 0; i < sortedReps.length; i++) {
        sortedReps[i].rank = (i + 1);
    }
    for (let i = 0; i < sortedReps.length; i++) {
        let row = table.insertRow(i);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);

        cell1.textContent = sortedReps[i].rank;
        cell2.textContent = sortedReps[i].name;
        cell3.textContent = sortedReps[i].percentage.toFixed(2);
    }
}






changeRank()

/*
let SHEET_ID = "1u011JiIm1YYlpmTfGab6GIVNlJHwzk2dWzt-d8iFs-I";
let baseUrl = "https://docs.google.com/spreadsheets/d/";
let key = "edit#gid=0";
let url = baseUrl + SHEET_ID + key;

async function fetchSheets(){
    try {
const response = await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vT_atSPXV0wy2hXokyNX3MWsbjD8HMtuGiJQN65tbiRj5rE7Qu_3Q14BRE7UFwhnm9FDrmL6J5zpgEP/pubhtml", { 
method: "GET", // *GET, POST, PUT, DELETE, etc.
mode: "no-cors", // no-cors, *cors, same-origin
cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
credentials: "same-origin", // include, *same-origin, omit
headers: {
  "Content-Type": "application/json" }
}
  );
console.log(response);
console.log(sheet);
    }catch (error){
        console.log(error)
    }
}

fetchSheets()
*/