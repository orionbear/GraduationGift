document.addEventListener('DOMContentLoaded', function () {
    // Get all elements with class "rnOuter"
    var rnOuterElements = document.querySelectorAll('.rnOuter');
  
    // Add a click event listener to each "rnOuter" element
    rnOuterElements.forEach(function (element) {
      element.addEventListener('click', function () {
        // Toggle the "clicked" class on the clicked element
        element.classList.toggle('clicked');
      });
    });
  });