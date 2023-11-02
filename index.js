const reps = {
    david: {
        rank: 1,
        percentage: 0
    },
    muhammid: {
        rank: 1,
        percentage: 0
    },
    scott: {
        rank: 1,
        percentage: 0
    },
    neil: {
        rank: 1,
        percentage: 0
    },
    ryan: {
        rank: 1,
        percentage: 0
    },
    kenyatta: {
        rank: 1,
        percentage: 0
    },
    andrew: {
        rank: 1,
        percentage: 0
    },
    rakib: {
        rank: 1,
        percentage: 0
    },
    andrae: {
        rank: 1,
        percentage: 0
    },

    aj: {
        rank: 1,
        percentage: 0
    }
 
}

const navListHead = document.getElementById("nav-list-head");
const docListHead = document.getElementById("doc-list-head");
const navList = document.getElementById("nav-list");
const docList = document.getElementById("doc-list");
const nav = document.querySelector("nav");
const navSpan = document.getElementById("nav-span");
const docSpan = document.getElementById("doc-span");

navListHead.addEventListener('click', ()=> {
    if (navList.hidden === false){
        navList.hidden = true;
        navSpan.textContent = "v";
        navSpan.style.top = "0px";
        navSpan.style.fontSize = "smaller";
    }else if(navList.hidden === true){
        navList.hidden = false;
        navSpan.textContent = "^";
        navSpan.style.top = "5px";
        navSpan.style.fontSize = "";
    }
})

docListHead.addEventListener('click', ()=> {
    if (docList.hidden === false){
        docList.hidden = true;
        docSpan.textContent = "v";
        docSpan.style.top = "0px";
        docSpan.style.fontSize = "smaller";
    }else if(docList.hidden === true){
        docList.hidden = false;
        docSpan.textContent = "^";
        docSpan.style.top = "5px"
        docSpan.style.fontSize = "";
    }
})

