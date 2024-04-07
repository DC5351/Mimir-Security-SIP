function calculatePasswordStrength(password) {
    let strength = 0;

    // Check length
    strength += Math.min(password.length / 4, 4) * 2; // Scale to 8

    // Check for uppercase letters
    strength += /[A-Z]/.test(password) ? 2 : 0;

    // Check for lowercase letters
    strength += /[a-z]/.test(password) ? 2 : 0;

    // Check for digits
    strength += /\d/.test(password) ? 2 : 0;

    // Check for special characters
    strength += /[!@#$%^&*(),.?":{}|<>]/.test(password) ? 2 : 0;

    return strength;
}

function checkPasswordStrength() {
    const passwordInput = document.getElementById('password');
    const strengthValue = document.getElementById('strengthValue');

    const password = passwordInput.value;
    const strength = calculatePasswordStrength(password);

    // Convert strength to a scale out of 16
    const strengthOutof16 = Math.min(Math.round(strength), 16);

    strengthValue.textContent = strengthOutof16;
}
