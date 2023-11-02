let reps = [
    {
        name: 'David',
        rank: 10,
        percentage: 10
    },
    {
        name: 'Muhammad',
        rank: 10,
        percentage: 20
    },
    {
        name: 'Scott',
        rank: 10,
        percentage: 30
    },
    {
        name: 'Neil',
        rank: 10,
        percentage: 40
    },
    {
        name: 'Ryan',
        rank: 10,
        percentage: 50
    },
    {
        name: 'Kenyatta',
        rank: 10,
        percentage: 60
    },
    {
        name: 'Andrew',
        rank: 10,
        percentage: 7
    },
    {
        name: 'Rakib',
        rank: 10,
        percentage: 8
    },
    {
        name: 'Andrae',
        rank: 10,
        percentage: 9
    },
    {
        name: 'Aj',
        rank: 10,
        percentage: 10
    }

]

const navListHead = document.getElementById("nav-list-head");
const docListHead = document.getElementById("doc-list-head");
const navList = document.getElementById("nav-list");
const docList = document.getElementById("doc-list");
const nav = document.querySelector("nav");
const navSpan = document.getElementById("nav-span");
const docSpan = document.getElementById("doc-span");

navListHead.addEventListener('click', () => {
    if (navList.hidden === false) {
        navList.hidden = true;
        navSpan.textContent = "v";
        navSpan.style.top = "0px";
        navSpan.style.fontSize = "smaller";
    } else if (navList.hidden === true) {
        navList.hidden = false;
        navSpan.textContent = "^";
        navSpan.style.top = "5px";
        navSpan.style.fontSize = "";
    }
})

docListHead.addEventListener('click', () => {
    if (docList.hidden === false) {
        docList.hidden = true;
        docSpan.textContent = "v";
        docSpan.style.top = "0px";
        docSpan.style.fontSize = "smaller";
    } else if (docList.hidden === true) {
        docList.hidden = false;
        docSpan.textContent = "^";
        docSpan.style.top = "5px"
        docSpan.style.fontSize = "";
    }
})

let mobile = window.matchMedia("(max-width: 1170px)");

function windowCheck(x) {
    if (x.matches) {
        navList.hidden = true;
        docList.hidden = true;
    }else{
        navList.hidden = false;
        docList.hidden = false;
    }
}


windowCheck(mobile);

function checkRank() {
    {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if ((reps[i].percentage) > (reps[j].percentage)) {
                    reps[i].rank -= 1;
                } else if (reps[i].percentage < reps[j].percentage) {
                    reps[i].rank += 1;
                }

            }
        }
        for(let i = 0; i < 9; i++){
            reps[i].rank = (reps[i].rank / 2)
        }
      console.log(reps);
    }
}

checkRank()