// Smooth scrolling effect

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// Contact form message
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  alert("Message Sent Successfully!");
  form.reset();
});