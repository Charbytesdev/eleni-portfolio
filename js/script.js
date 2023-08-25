const mouseTracker = document.getElementById("mouse-tracker");
document.body.addEventListener("pointermove", (e) => {
  const { clientX, clientY } = e;
  mouseTracker.style.left = `${clientX}px`;
  mouseTracker.style.top = `${clientY}px`;
});
