document.addEventListener('DOMContentLoaded', function () {
  var MAX_CHARS = 11;
  var BREAKPOINT = 749; // px — matches your existing mobile breakpoint

  // Adjust this selector to match your actual product card heading class
  var headings = document.querySelectorAll('.product-card__content h3, .trending__card-title');

  function truncateHeadings() {
    var isSmallScreen = window.innerWidth <= BREAKPOINT;

    headings.forEach(function (heading) {
      // Save the original full text once, so we can restore it later
      if (!heading.dataset.fullText) {
        heading.dataset.fullText = heading.textContent.trim();
      }

      var fullText = heading.dataset.fullText;

      if (isSmallScreen && fullText.length > MAX_CHARS) {
        heading.textContent = fullText.slice(0, MAX_CHARS) + '...';
      } else {
        heading.textContent = fullText;
      }
    });
  }

  truncateHeadings();

  // Re-run on resize (debounced) in case the window crosses the breakpoint
  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(truncateHeadings, 150);
  });
});