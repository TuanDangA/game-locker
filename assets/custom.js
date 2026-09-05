
document.addEventListener('DOMContentLoaded', function () {

  function truncateProductTitles() {
    const titles = document.querySelectorAll(
      '.product-grid-view-zoom-out--details h3'
    );

    titles.forEach(function (title) {
      // Store original title only once
      if (!title.dataset.originalText) {
        title.dataset.originalText = title.textContent.trim();
      }

      const originalText = title.dataset.originalText;

      // Mobile only
      if (window.innerWidth <= 749) {
        if (originalText.length > 11) {
          title.textContent = originalText.slice(0, 11) + '...';
        } else {
          title.textContent = originalText;
        }
      } else {
        // Restore full title on desktop
        title.textContent = originalText;
      }
    });
  }

  truncateProductTitles();

  window.addEventListener('resize', truncateProductTitles);

});
