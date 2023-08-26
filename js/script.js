const mouseTracker = document.getElementById("mouse-tracker");
document.body.addEventListener("pointermove", (e) => {
  const { clientX, clientY } = e;
  mouseTracker.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 3000, fill: "forwards" }
  );
});

const publications = document.getElementById("publications");

const pageContainer = document.getElementById("page-container");

const home = document.getElementById("home");
const resume = document.getElementById("resume");
const about = document.getElementById("about");

document.addEventListener("wheel", (e) => {
  console.log(pageContainer.scrollLeft);
  pageContainer.scrollLeft > pageContainer.clientWidth;

  if (pageContainer.scrollLeft > pageContainer.clientWidth * 2.5) {
    home.classList.remove("active-page");
    publications.classList.remove("active-page");
    resume.classList.remove("active-page");
    about.classList.add("active-page");
  } else if (pageContainer.scrollLeft > pageContainer.clientWidth * 1.5) {
    home.classList.remove("active-page");
    publications.classList.remove("active-page");
    resume.classList.add("active-page");
    about.classList.remove("active-page");
  } else if (pageContainer.scrollLeft > pageContainer.clientWidth / 2) {
    home.classList.remove("active-page");
    publications.classList.add("active-page");
    resume.classList.remove("active-page");
    about.classList.remove("active-page");
  } else {
    home.classList.add("active-page");
    publications.classList.remove("active-page");
    resume.classList.remove("active-page");
    about.classList.remove("active-page");
  }
});
