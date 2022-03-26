"use strict";

// ? Elements

const toggleButton = document.getElementById("toggle__button");
const Navbar_links = document.getElementById("nav__links");
const img = document.getElementById("slidingImg");
const btnScrollTo = document.querySelector(".btn_scroll_to");
const Destinations = document.querySelector("#destinationSection");

//////////////////////////////////////////////////

// ! Nav Bar

toggleButton.addEventListener("click", function (e) {
  //////////////////////////////
  Navbar_links.classList.toggle("hidden");
});

////////////////////////////////////////

// ! Automatic Images Slider

let num = 1;
// img.src = `images/img_${num}.jpg`;
function auto() {
  if (num >= 3) {
    num = 1;
  } else {
    num++;
  }
  img.src = `images/img_${num}.jpg`;
}

setInterval(auto, 4000);

//////////////////////////////////////////

// ! Smooth Scrolling

// btnScrollTo.addEventListener('click', function(e) {
//   ///////////////////////////////
//   e.preventDefault();
//   // console.log('hello');
//   Destinations.scrollIntoView({behavior : 'smooth'})
// })

// todo = page navigation for all links

// * Get a node list of every links
// const links = document.querySelectorAll(".nav__link");

// // console.log(links);

// // * run a loop forEach link

// links.forEach(function (elem) {
//   ///////////////////////////////
//   // console.log(elem);
//   elem.addEventListener("click", function (e) {
//     ////////////////////////////////////
//     e.preventDefault();

//     const id = elem.getAttribute("href"); // this is href attri
//     // console.log(id);

//     // * selecting the id on the page
//     // console.log(document.querySelector(id));
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

// todo = doing the same with Event Delegation or event propogation
// * this is a good practice

// * Event Delegation

// todo
// 1 -> Add Event listener to  common parent elem
// 2 -> Determine what elem originated the event

Navbar_links.addEventListener("click", function (e) {
  /////////////////////////////////////////////
  // console.log(e.target);

  e.preventDefault();

  // * Select only navlink
  if (e.target.classList.contains("nav__link")) {
    // console.log('nav__link');
    // * selecting href attri
    // console.log();
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

/////////////////////////////////////////////////

//! Dom Transversing

// * Selecting an element on the basis of one element

const body = document.querySelector("body");

// console.log(body.firstElementChild);
// console.log();
body.lastElementChild.previousSibling.previousSibling.style.backgroundColor =
  "black";

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

// const ReadMore = document.querySelectorAll('.more0');
// const MoreContent = document.querySelectorAll('.more')
// console.log(ReadMore);
// console.log(MoreContent);

// let arr = []

// arr.push(ReadMore[0]);
// arr.push(MoreContent[]);
// console.log(arr);

// console.log();

// const Destinations = document.getElementById('destinations');
document.querySelector("#destinations").addEventListener("click", function (e) {
  // console.log(e.target.closest('#content').childNodes[3].children);
  //////////////////////////////

  if (e.target.id === "ReadMorebtn") {
    e.target.previousElementSibling.lastElementChild.classList.toggle("hidden");
  }
});

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

const OperationsContainer = document.querySelector("#Operations_section");
const tabs = document.querySelectorAll("operations__tab");
const tabsContent = document.querySelectorAll(".operation_content");
OperationsContainer.addEventListener("click", function (e) {
  ////////////////////////////////
  // console.log(e.target);
  const clicked = e.target.closest(".operations__tab");
  // console.log(clicked);

  tabsContent.forEach((content) => {
    content.classList.add("hidden");
  });

  document
    .querySelector(`.content_tab-${clicked.dataset.tab}`)
    .classList.remove("hidden");
});

////////////////////////////////////////////////////
///////////////////////////////////////////////////

// ! Sticky Nav Bar

// console.log(getComputedStyle(header).marginLeft);
// header.style.marginLeft = '0px'
// header.style.marginRight = '0px'

// console.log(header.classList);

// const stickyNav = function (entries) {
  //   // console.log(entries);
  //   const [entry] = entries
  //   console.log(entry);
  //   // if (!entry.isIntersecting) {
    //   //   header.classList.add('fixed')
    //   // } else {
      //   //   // header.classList.remove('fixed')
      
      //   // }
      // }
      
      // const headerObserver = new IntersectionObserver(stickyNav , {
        //   root: null,
        //   threshold:0.10,
// })

// headerObserver.observe(header)

const nav = document.querySelector('.nav')
const header = document.getElementById('header')

const stickyNav = function (entries) {
  //////////////////
  // entry details h
  const [entry] = entries;
  // ? !entry.isIntersecting -> agar header interact nahi krega viewport se according to threshold
  if(!entry.isIntersecting) {
     nav.classList.add('fixed')
  } else {
    nav.classList.remove('fixed')
  }
}; 

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null, // ? viewport 
  threshold: 0.5, // ? visiblity in viewport i.e 50%
});



headerObserver.observe(header)