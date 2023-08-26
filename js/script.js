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

document.addEventListener("wheel", (e) => {
  pageContainer.scrollLeft > pageContainer.clientWidth;

  if (pageContainer.scrollLeft > pageContainer.clientWidth / 2) {
    home.classList.remove("active-page");
    publications.classList.add("active-page");
  } else {
    home.classList.add("active-page");
    publications.classList.remove("active-page");
  }
});
