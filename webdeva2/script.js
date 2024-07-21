//target all elements to save to constants
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
var allpages = document.querySelectorAll(".page");
//select all subtopic pages

console.log(allpages);
hideall();
show(1);

function hideall() { //function to hide all pages
    for (let onepage of allpages) { //go through all subtopic pages
        onepage.style.display = "none"; //hide it
    }
}

function show(pgno) { //function to show selected page no
    hideall();
    //select the page based on the parameter passed in
    let onepage = document.querySelector("#page" + pgno);
    //show the page
    onepage.style.display = "block";
}

/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
    show(1);
});
page2btn.addEventListener("click", function () {
    show(2);
});
page3btn.addEventListener("click", function () {
    show(3);
});

const koreanFlag = document.querySelector(".korean-flag-img");
const indoFlag = document.querySelector(".indo-flag-img");

koreanFlag.addEventListener("click", function () 
{
    moveAndFade(koreanFlag);

    koreanFlag.addEventListener('animationend', function() {
        koreanFlag.classList.add("hidden-page1");
    }, { once: true }); //event listener called once
});

indoFlag.addEventListener("click", function () 
{
    moveAndFade(indoFlag);

    indoFlag.addEventListener('animationend', function() {
        indoFlag.classList.add("hidden-page1");
    }, { once: true }); //event listener called once
});

function moveAndFade(e) {
    e.classList.add("moveAndFade");
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting)
        {
            entry.target.classList.add('in-view');
        }
        else
        {
            entry.target.classList.remove('in-view');
        }
    }), { threshold: 0.0 };
})
const hiddenInfo = document.querySelectorAll('.hidden-page2');
hiddenInfo.forEach((info) => observer.observe(info));


const hamBtn = document.querySelector("#hamIcon");
const menuItemsList = document.querySelector("nav ul");

function toggleMenus() { /*open and close menu*/
    menuItemsList.classList.toggle("menuHide");
}

function checkWidth() {
    if (window.innerWidth > 800) {
        menuItemsList.classList.remove("menuHide");
    }
}

hamBtn.addEventListener("click", toggleMenus);
window.addEventListener("resize", checkWidth);
checkWidth();
