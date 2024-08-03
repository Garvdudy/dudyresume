document.addEventListener('DOMContentLoaded', function() {
    const pdfLinks = document.querySelectorAll('.pdf-link');

    pdfLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const pdfUrl = this.href;
            window.open(pdfUrl, '_blank');
        });
    });
});
