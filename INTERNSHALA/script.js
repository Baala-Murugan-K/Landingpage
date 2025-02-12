document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Basic form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const country = document.getElementById('country').value;

    if (name && email && phone && country) {
        document.getElementById('formResponse').style.display = 'block';
        document.getElementById('formResponse').innerText = 'Thank you for your submission!';
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});