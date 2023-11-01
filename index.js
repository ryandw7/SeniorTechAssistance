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

navListHead.addEventListener('click', ()=> {
    if (navList.hidden === false){
        navList.hidden = true;
        nav.style.height = "fit-content"
    }else if(navList.hidden === true){
        navList.hidden = false;
        if(docList.hidden === false){
            nav.style.height = "90%"
        }else{
            nav.style.height = "fit-content"
        }
    }
})

docListHead.addEventListener('click', ()=> {
    if (docList.hidden === false){
        docList.hidden = true;
        nav.style.height = "fit-content"
    }else if(docList.hidden === true){
        docList.hidden = false;
        if(navList.hidden === false){
            nav.style.height = "90%"
        }else{
            nav.style.height = "fit-content"
        }
    }
})

function navSize(){
    if(docList.hidden === false){
     nav.style.height = "90%";
    }else{
        nav.style.height = "fit-content";
        nav.style.backgroundColor = "white";
    }
}

navSize();