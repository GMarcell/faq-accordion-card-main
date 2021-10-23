const accordionButtons = document.querySelectorAll(".dropbtn");

const addActiveClass = event => event.target.classList.toggle("active");

accordionButtons.forEach(button => button.addEventListener("click", addActiveClass));