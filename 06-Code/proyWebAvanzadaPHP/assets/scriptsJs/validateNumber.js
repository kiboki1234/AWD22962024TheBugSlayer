function validatePhoneNumber(phoneNumber) {
    const pattern = /^\+?\d{1,4}?[-.\s]?(\(?\d{1,3}?\)?[-.\s]?)?[\d\s.-]{7,}$/;
    return pattern.test(phoneNumber);
}

document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');
    const form = phoneInput.closest('form');
    const feedback = document.createElement('div');
    feedback.className = 'invalid-feedback';
    feedback.textContent = 'Por favor, ingresa un número de teléfono válido.';
    phoneInput.parentNode.appendChild(feedback);

    phoneInput.addEventListener('input', function() {
        if (validatePhoneNumber(phoneInput.value)) {
            phoneInput.classList.remove('is-invalid');
            phoneInput.classList.add('is-valid');
            feedback.style.display = 'none';
        } else {
            phoneInput.classList.remove('is-valid');
            phoneInput.classList.add('is-invalid');
            feedback.style.display = 'block';
        }
    });

    form.addEventListener('submit', function(event) {
        if (!validatePhoneNumber(phoneInput.value)) {
            event.preventDefault();
            alert('Por favor, ingresa un número de teléfono válido.');
        }
    });
});