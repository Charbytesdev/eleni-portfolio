const mouseTracker = document.getElementById("mouse-tracker");
const pageContainer = document.getElementById("page-container");
const home = document.getElementById("home");
const publications = document.getElementById("publications");
const resume = document.getElementById("resume");
const about = document.getElementById("about");

document.body.addEventListener("pointermove", (e) => animateMouseTracker(e));
document.addEventListener("wheel", activateCurrentNavigationUnderline);
home.addEventListener("click", () => {
  deactivateAllNavigationUnderline();
  activateNavigationUnderline(home);
});
publications.addEventListener("click", () => {
  deactivateAllNavigationUnderline();
  activateNavigationUnderline(publications);
});
resume.addEventListener("click", () => {
  deactivateAllNavigationUnderline();
  activateNavigationUnderline(resume);
});

about.addEventListener("click", () => {
  deactivateAllNavigationUnderline();
  activateNavigationUnderline(about);
});

function animateMouseTracker(e) {
  const { clientX, clientY } = e;
  mouseTracker.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 3000, fill: "forwards" }
  );
}

function activateCurrentNavigationUnderline() {
  deactivateAllNavigationUnderline();

  if (pageContainer.scrollLeft > pageContainer.clientWidth * 2.5) {
    activateNavigationUnderline(about);
  } else if (pageContainer.scrollLeft > pageContainer.clientWidth * 1.5) {
    activateNavigationUnderline(resume);
  } else if (pageContainer.scrollLeft > pageContainer.clientWidth / 2) {
    activateNavigationUnderline(publications);
  } else {
    activateNavigationUnderline(home);
  }
}

function deactivateAllNavigationUnderline() {
  home.classList.remove("active-page");
  publications.classList.remove("active-page");
  resume.classList.remove("active-page");
  about.classList.remove("active-page");
}

function activateNavigationUnderline(page) {
  page.classList.add("active-page");
}
