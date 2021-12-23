mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function removeActive() {
  var element1 = document.getElementById("homelink");
  var element2 = document.getElementById("apropos");
  element1.classList.remove("active");
  element2.classList.add("active");
}

function ajout() {
  var element1 = document.getElementById("homelink");
  var element2 = document.getElementById("apropos");
  element1.classList.add("active");
  element2.classList.remove("active");
}