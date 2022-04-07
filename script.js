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
  img.src = `images/img_${num}_mobile.jpg`;
}

// setInterval(auto, 4000);

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
// ? footer
// body.lastElementChild.previousSibling.previousSibling.style.backgroundColor =
//   "black";

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

// ! ReadMore and ReadLess
let ticketContainer;

const Read_less_OR_more = function (target, txt, hexCode) {
  target.previousElementSibling.lastElementChild.classList.toggle("hidden");
  target.textContent = `${txt}`;
  target.style.backgroundColor = `#${hexCode}`;
};

// const Destinations = document.getElementById('destinations');
document.querySelector("#destinations").addEventListener("click", function (e) {
  // console.log(e.target.closest('#content').childNodes[3].children);
  //////////////////////////////

  if (
    e.target.id === "ReadMorebtn" &&
    e.target.previousElementSibling.lastElementChild.classList.contains(
      "hidden"
    )
  ) {
    Read_less_OR_more(e.target, "Read Less", "9B9BCC");
  } else if (
    e.target.id === "ReadMorebtn" &&
    !e.target.previousElementSibling.lastElementChild.classList.contains(
      "hidden"
    )
  ) {
    Read_less_OR_more(e.target, "Read More", "DC2626");
  }

  /////////////////////////////////////////////////////////
  ticketContainer = document.querySelector(".ticket_modal");
  let cityName = document.querySelector(".cityName");
  if (e.target.id === "BuyTicket") {
    ticketContainer.classList.remove("hidden");
    cityName.textContent =
      e.target.closest("div").firstElementChild.textContent;
  }
});

const btnCloseModal = document.querySelector(".btn--close-modal");
btnCloseModal.addEventListener("click", function () {
  ticketContainer.classList.add("hidden");
});

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

const OperationsContainer = document.querySelector("#Operations_section");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContent = document.querySelectorAll(".operation_content");
OperationsContainer.addEventListener("click", function (e) {
  ////////////////////////////////
  // console.log(e.target);
  const clicked = e.target.closest(".operations__tab");
  if (!clicked) return;
  // console.log(clicked);

  tabsContent.forEach((content) => {
    content.classList.add("hidden");
  });

  tabs.forEach((tab) => {
    tab.classList.add("opacity-60");
    tab.classList.remove("border");
    e.target.classList.remove("opacity-60");
    e.target.classList.add("border");
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

const nav = document.querySelector(".nav");
const header = document.getElementById("header");

const stickyNav = function (entries) {
  //////////////////
  // entry details h
  const [entry] = entries;
  // ? !entry.isIntersecting -> agar header interact nahi krega viewport se according to threshold
  if (!entry.isIntersecting) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null, // ? viewport
  threshold: 0.5, // ? visiblity in viewport i.e 50%
});

// headerObserver.observe(header)

// console.log(document.querySelector('.modal'))

///////////////////////////////////////////////////////////

const Confirmbtn = document.getElementById("ConfirmTicket");
const usr_ticket__details = document.querySelectorAll(".user_ticketDetail");
const usrName = document.querySelector("#user_ticket_name");
const usrEmail = document.querySelector("#user_ticket_email");
const usrTele = document.querySelector("#user_ticket_tele");
const usrLocation = document.querySelector("#user_ticket_location");
const usrDate = document.querySelector("#user_ticket_date");
const TicketModal = document.querySelector(".ticket_modal");

usr_ticket__details.forEach(function (elem, i) {});

Confirmbtn.addEventListener("click", function (e) {
  e.preventDefault();
  TicketModal.innerHTML = "";
  const html = `<button class="btn--close-modal absolute -top-0.5 text-4xl right-2">&times;</button>
  <h2 class="model__header mt-6 text-2xl">Congratulations Your Ticket Has Been Booked !!!</h2>
   <span class="text-2xl">To <i>winderberg</i></span> 
  <div class="modal__form flex flex-col space-y-2 text-xl font-mono py-2" >
    <table class="border-2 my-4 text-left">
      <tr>
        <th  class="px-2 py-2">From</th>
        <td>${usrLocation.value}</td>
      </tr>
      <tr>
        <th class="px-2 py-2">To</th>
        <td>Winderberg</td>
      </tr>
      <tr>
        <th class="px-2 py-2">Name</th>
        <td>${usrName.value}</td>
      </tr>
      <tr>
        <th class="px-2 py-2">Flight</th>
        <td>SUUV-778C52</td>
      </tr>
      <tr>
        <th class="px-2 py-2">Date</th>
        <td>${usrDate.value}</td>
      </tr>
      <tr>
        <th class="px-2 py-2">Timing</th>
        <td>hello</td>
      </tr>
    </table>
    <button type="submit" class="bg-gray-900 text-white w-fit absolute bottom-1 right-2 text-base m-2">Download</button> 
  </div>`;
  TicketModal.insertAdjacentHTML("afterbegin", html);
});

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

// ! lazy Loading Images

const ImgTargets = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // ? it is lazy img at first
  // console.log(entry.target.src); // img_1_lazy.jpg
  entry.target.src = entry.target.dataset.src; // ? now Here it becme --- img_1_mobile.jpg
  // console.log(entry.target.src); // img_1_mobile.jpg

  // * When the img_1_mobile gets fullyLoaded then display it
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("blur-sm");
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  ////
  root: null,
  threshold: 0,
});

ImgTargets.forEach((img) => {
  imgObserver.observe(img);
});
