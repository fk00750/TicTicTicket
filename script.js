"use strict";

// ? Elements

const toggleButton = document.getElementById("toggle__button");
const Navbar_links = document.getElementById("nav__links");
const img = document.getElementById("slidingImg");
const btnScrollTo = document.querySelector(".btn_scroll_to");
const Destinations = document.querySelector("#destinationSection");
const Confirmbtn = document.getElementById("ConfirmTicket");
const usr_ticket__details = document.querySelectorAll(".user_ticketDetail");
const usrName = document.querySelector("#user_ticket_name");
const usrEmail = document.querySelector("#user_ticket_email");
const usrTele = document.querySelector("#user_ticket_tele");
const usrLocation = document.querySelector("#user_ticket_location");
const usrDate = document.querySelector("#user_ticket_date");
const TicketModal = document.querySelector(".ticket_modal");
const OperationsContainer = document.querySelector("#Operations_section");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContent = document.querySelectorAll(".operation_content");
const ImgTargets = document.querySelectorAll("img[data-src]");
const btnCloseModal = document.querySelector(".btn--close-modal");
const cityName = document.querySelector(".cityName");
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

setInterval(auto, 4000);

//////////////////////////////////////////

// ! Smooth Scrolling

// btnScrollTo.addEventListener('click', function(e) {
//   ///////////////////////////////
// todo = page navigation for all links

Navbar_links.addEventListener("click", function (e) {
  /////////////////////////////////////////////

  e.preventDefault();

  // * Select only navlink
  if (e.target.classList.contains("nav__link")) {
    // * selecting href attri
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

/////////////////////////////////////////////////

// ! ReadMore and ReadLess

const Read_less_OR_more = function (target, txt, hexCode) {
  target.previousElementSibling.lastElementChild.classList.toggle("hidden");
  target.textContent = `${txt}`;
  target.style.backgroundColor = `#${hexCode}`;
};

document.querySelector("#destinations").addEventListener("click", function (e) {
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
  // ticketContainer = document.querySelector(".ticket_modal");
  if (e.target.id === "BuyTicket") {
    TicketModal.classList.remove("hidden");
    cityName.textContent =
      e.target.closest("div").firstElementChild.textContent;
  }
});

btnCloseModal.addEventListener("click", function () {
  TicketModal.classList.add("hidden");
});

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

// ! Operation tab

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

headerObserver.observe(header);

///////////////////////////////////////////////////////////

// ! Ticket Booking
Confirmbtn.addEventListener("click", function (e) {
  e.preventDefault();
  TicketModal.innerHTML = "";
  const html = `<button class="btn--close-modalD absolute -top-0.5 text-4xl right-2">&times;</button>
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

// ! After Confirm button close modal 

TicketModal.addEventListener('click',function(e) {
  const afterConfirm_closebtn = e.target.classList.contains('btn--close-modalD')

  if(!afterConfirm_closebtn) return


  if (afterConfirm_closebtn) {
    TicketModal.classList.add('hidden')
  }
})

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

// ! lazy Loading Images

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // ? it is lazy img at first
  entry.target.src = entry.target.dataset.src; // ? now Here it becme --- img_1_mobile.jpg
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
