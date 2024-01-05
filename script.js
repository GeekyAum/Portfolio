alert("Welcome to Aum's Portfolio");

document.addEventListener('DOMContentLoaded', function () {
  var resumeButton = document.querySelector('button');
  var resumeSection = document.querySelector('.resume-section');
  var closeButton = resumeSection.querySelector('button');

  resumeButton.addEventListener('click', function () {
      resumeSection.classList.toggle('show-resume');

  
  });
  closeButton.addEventListener('click',function () {
      resumeSection.classList.remove('show-resume');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var scroll = new SmoothScroll('a[href*="#"]', {
      speed: 100, // Adjust the scrolling speed as needed
      offset: 30, // Adjust the offset if you have a fixed header
  });
});
// Get the navigation bar element
var navbar = document.querySelector('.navbar');

// Get the initial offset position of the navigation bar
var sticky = navbar.offsetTop;

// Function to add the "sticky" class to the navigation bar
function makeNavbarSticky() {
  if (window.pageYOffset >= sticky) {
      navbar.classList.add('sticky');
  } else {
      navbar.classList.remove('sticky');
  }
}

// Attach the makeNavbarSticky function to the scroll event
window.onscroll = function () {
  makeNavbarSticky();
};
document.addEventListener('DOMContentLoaded', function () {
      var textElement = document.getElementById('typewriter-text');
      var texts = ['Aum Vyas', 'Developer'];
      var currentTextIndex = 0;

      function typeWriterEffect() {
          var currentText = texts[currentTextIndex];
          textElement.innerText = ''; // Clear the text content

          for (var i = 0; i < currentText.length; i++) {
              setTimeout(function (char) {
                  textElement.innerHTML += char;
              }, i * 200, currentText[i]); // Increased delay to 200 milliseconds
          }

          setTimeout(function () {
              // Call the backspace function after typing
              backspaceEffect(currentText);
          }, currentText.length * 200 + 1000); // Wait for 1 second after typing
      }

      function backspaceEffect(text) {
          for (var i = text.length; i >= 0; i--) {
              setTimeout(function (index) {
                  textElement.innerText = text.substring(0, index);
              }, (text.length - i) * 100, i);
          }

          setTimeout(function () {
              // Display the next text after backspacing
              currentTextIndex = (currentTextIndex + 1) % texts.length;
              typeWriterEffect();
          }, (text.length + 1) * 100); // Wait for 1 second after backspacing
      }
      typeWriterEffect()
  });
