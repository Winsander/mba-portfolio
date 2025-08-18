// scripts.js
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) document.body.classList.add("scrolled");
  else document.body.classList.remove("scrolled");
});

// fade-in photo (optional; harmless if class missing)
document.addEventListener("DOMContentLoaded", () => {
  const photo = document.querySelector(".photo-card");
  if (photo) photo.classList.add("fade-in");
});
