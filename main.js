function generatePass() {
    let Password = document.getElementById('result');
    const passLength = document.getElementById("inp").value;
    const includeLowerCase = document.getElementById("lowercase");
    const includeUpperCase = document.getElementById("uppercase");
    const includeSpecialCharacters = document.getElementById("special");
    const includeNumbers = document.getElementById("numbers"); // Fixed ID
  
    let lowercase = false;
    let uppercase = false;
    let specials = false;
    let numbers = false;
  
    if (includeLowerCase.checked) { lowercase = true; }
    if (includeUpperCase.checked) { uppercase = true; }
    if (includeSpecialCharacters.checked) { specials = true; }
    if (includeNumbers.checked) { numbers = true; }
  
    const lowercasechars = "qwertyuiopasdfghjklzxcvbnm";
    const uppercasechars = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const specialchars = "!@#$%^&*()-_+={[}]|:;'<>?/";
    const numberschars = "1234567890";
  
    let allowedchars = "";
    let password = ""; 
  
    allowedchars += includeLowerCase.checked ? lowercasechars : "";
    allowedchars += includeUpperCase.checked ? uppercasechars : "";
    allowedchars += includeNumbers.checked ? numberschars : "";
    allowedchars += includeSpecialCharacters.checked ? specialchars : "";
  
    if (allowedchars.length === 0) {
      Password.textContent = "Please select at least one character type!";
      return;
    }
  
    for (let i = 0; i < passLength; i++) {
      const randomIndex = Math.floor(Math.random() * allowedchars.length);
      password += allowedchars[randomIndex];
    }
  
    Password.textContent = password;
  }
  
  function copyPassword() {
    let passwordText = document.getElementById("result").textContent;
    if (passwordText === "Generated password will appear here" || passwordText === "Please select at least one character type!") {
        alert("No password to copy!");
        return;
    }

    navigator.clipboard.writeText(passwordText).then(() => {
        alert("Password copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}
