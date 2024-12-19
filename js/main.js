


import { showModal } from "./ui.js";



const hamburgerMenu = document.querySelector(".hamburger-menu");
const navigation = document.querySelector("nav");
const createMailBtn = document.querySelector(".create");
const modal = document.querySelector(".modal-wrapper");
const closeModalBtn = document.querySelector("#close-btn");
const form = document.querySelector("#create-mail-form");


hamburgerMenu.addEventListener("click", () => {
  navigation.classList.toggle("hide");
});




createMailBtn.addEventListener("click", () => showModal(modal, true));

closeModalBtn.addEventListener("click", () => showModal(modal, false));


window.addEventListener("resize", (e) => {

  const width = e.target.innerWidth;

  if (width < 1100) {

    navigation.classList.add("hide");
  } else {
    
    navigation.classList.remove("hide");
  }
});



form.addEventListener("submit", (e) => {
  // Form gönderildiğinde default olarak sayfayı yeniler.Bunu engellemek için
  e.preventDefault();
  console.log(`Form gönderildi`);

  console.log(e);
});
