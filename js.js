function toggleFAQ(element) {
    const parent = element.parentElement;
    const allFaqItems = document.querySelectorAll('.faq-item');

    // Close other open FAQs
    allFaqItems.forEach(item => {
        if (item !== parent) {
            item.classList.remove('active');
        }
    });

    // Toggle the clicked FAQ
    parent.classList.toggle('active');
}