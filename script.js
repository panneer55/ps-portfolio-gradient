// Toggle Navbar.............
function hideSection() {
  document.querySelector("section.active").classList.toggle("fade-out");
}

function toggleNavBar() {
  document.querySelector("header").classList.toggle("active");
}

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
  hideSection();
  toggleNavBar();
  document.body.classList.toggle("hide-scrolling");
});

// Portfolio Item details pop-up

function togglePorfolioPopup() {
  document.querySelector(".portfolio-popup").classList.toggle("open");
  document.body.classList.toggle("hide-scrolling");
  document.querySelector("main").classList.toggle("fade-out");
}

function porfolioItemDetails(portfolioItem) {
  // image...
  document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(
    ".portfolio-item-thumbnail img"
  ).src;
  //   header.........
  document.querySelector(".pp-header h3").innerHTML =
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;
  // details.....
  document.querySelector(".pp-body").innerHTML =
    portfolioItem.querySelector(".portfolio-details").innerHTML;
}
// Event listners

// Active Section

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("link-item") && e.target.hash !== "") {
    const hash = e.target.hash;
    document.querySelector(".overlay").classList.add("active");
    navToggler.classList.add("hide");
    if (e.target.classList.contains("nav-item")) {
      toggleNavBar();
    } else {
      hideSection();
      document.body.classList.add("hide-scrolling");
    }
    setTimeout(() => {
      document
        .querySelector("section.active")
        .classList.remove("active", "fade-out");
      document.querySelector(hash).classList.add("active");
      window.scrollTo(0, 0);
      document.body.classList.remove("hide-scrolling");
      navToggler.classList.remove("hide");
      document.querySelector(".overlay").classList.remove("active");
    }, 500);
  }
});

// Project button

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-project-btn")) {
    // console.log("hi");
    togglePorfolioPopup();
    document.querySelector(".portfolio-popup").scrollTo(0, 0);
    porfolioItemDetails(e.target.parentElement);
  }
});
// modal close button

document
  .querySelector(".pp-close")
  .addEventListener("click", togglePorfolioPopup);

//   hide popup when clicking outside of it
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("pp-inner")) {
    togglePorfolioPopup();
  }
});
