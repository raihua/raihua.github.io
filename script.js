// Adjust scroll behavior dynamically based on header height
document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('header');

    // Smooth scroll to target section with dynamic offset
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            var targetId = this.getAttribute('href').substring(1);
            var target = document.getElementById(targetId);

            if (target) {
                var headerHeight = header.offsetHeight;
                var targetOffset = target.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetOffset - 30,
                    behavior: 'smooth'
                });
            }
        });
    });
});

