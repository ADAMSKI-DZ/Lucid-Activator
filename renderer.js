const { ipcRenderer, shell } = require("electron");
var os = require("os");

const minimizeBtn = document.querySelector(".minimize");
const closeBtn = document.querySelector(".close");

minimizeBtn.addEventListener("click", () => {
  console.log("minimize");
  ipcRenderer.send("minimize-the-app");
});
closeBtn.addEventListener("click", () => {
  console.log("close");
  ipcRenderer.send("close-the-app");
});

const activateButtons = document.querySelectorAll(".activate");
const activatePage = document.querySelectorAll(".active-page");
for (let i = 0; i < activatePage.length; i++) {
  activateButtons[i].onclick = function () {
    let t = 0;
    while (t < activatePage.length) {
      activatePage[t++].className = "active-page";
    }
    activatePage[i].className = "active-page active";
  };
}
const back = document.querySelectorAll(".back");
back.forEach((back) => {
  back.addEventListener("click", () => {
    activatePage.forEach((page) => {
      page.className = "active-page";
    });
  });
});

const professional = document.querySelector(".professional");
const professionalN = document.querySelector(".professional-n");
const home = document.querySelector(".home");
const singleLanguage = document.querySelector(".single-language");
const homeN = document.querySelector(".home-n");
const countrySpecific = document.querySelector(".country-specific");
const enterprise = document.querySelector(".enterprise");
const enterpriseN = document.querySelector(".enterprise-n");
const education = document.querySelector(".education");
const educationN = document.querySelector(".education-n");

professional.addEventListener("click", () => {
  ipcRenderer.send("activate-windows-professional");
});
professionalN.addEventListener("click", () => {
  ipcRenderer.send("activate-windows-professionalN");
});
home.addEventListener("click", () => {
  ipcRenderer.send("activate-windows-home");
});
singleLanguage.addEventListener("click", () => {
  ipcRenderer.send("activate-windows-singleLanguage");
});
homeN.addEventListener("click", () => {
  ipcRenderer.send("activate-windows-homeN");
});
countrySpecific.addEventListener("click", () => {
  ipcRenderer.send("activate-windows-countrySpecific");
});
enterprise.addEventListener("click", () => {
  ipcRenderer.send("activate-windows-enterprise");
});
enterpriseN.addEventListener("click", () => {
  ipcRenderer.send("activate-windows-enterpriseN");
});
education.addEventListener("click", () => {
  ipcRenderer.send("activate-windows-education");
});
educationN.addEventListener("click", () => {
  ipcRenderer.send("activate-windows-educationN");
});

const returnBtn = document.querySelector(".return");
const finishActivate = document.querySelector(".finish-activate-windows");

ipcRenderer.on("show", () => {
  setTimeout(() => {
    finishActivate.classList.add("active");
  }, 5000);
});
returnBtn.addEventListener("click", () => {
  finishActivate.classList.remove("active");
});

const usrName = document.querySelector(".usr-name");
usrName.innerHTML = os.userInfo().username;

const closeAbout = document.querySelector(".close-about");
const aboutPage = document.querySelector(".about");
const aboutBtn = document.querySelector(".about-btn");
aboutBtn.addEventListener("click", () => {
  aboutPage.classList.add("active");
});
closeAbout.addEventListener("click", () => {
  aboutPage.classList.remove("active");
});
const moreInfo = document.querySelector(".moreinfo");
moreInfo.addEventListener("click", () => {
  shell.openExternal("https://malicktammal.netlify.app/");
});
