function generatePassword() {
    const length = document.getElementById("passwordLengthA").value;
    const includeDigits = document.getElementById("includeDigitsA").checked;
    const includeSpecialChars = document.getElementById("includeSpecialCharsA").checked;

    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (includeDigits) {
      characters += '0123456789';
    }
    if (includeSpecialChars) {
      characters += '!@#$%^&*()_+~`|}{[]\:;?><,./-='; 
    }

    let password = '';
    for (let i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById("generatedPasswordA").value = password;
  }

  function generateNumericPassword() {
    const length = document.getElementById("passwordLengthN").value;
    const numbers = '0123456789';
    let generatedPassword = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * numbers.length);
      generatedPassword += numbers[randomIndex];
    }

    document.getElementById("generatedPasswordN").value = generatedPassword;
  }

  function copyToClipboardA() {
    const passwordField = document.getElementById("generatedPasswordA");
    passwordField.select();
    document.execCommand("copy");
  }

  function copyToClipboardN() {
    const passwordField = document.getElementById("generatedPasswordN");
    passwordField.select();
    document.execCommand("copy");
  }

  //alert("Password copied to clipboard!");