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
