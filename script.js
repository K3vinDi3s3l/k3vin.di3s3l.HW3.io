
var generateBtn = document.querySelector("#generate");


function writePassword() {
  function generatePassword() {
    var characterTypeCounter = 0;
    var passwordHolder = "";
    var passwordLength = prompt(
      "How long do you want the password to be? (8-128 characters)"
    );
    var passwordLowerCase = prompt("Do you want lower case? (Yes/No)");
    var passwordUpperCase = prompt("Do you want upper case? (Yes/No)");
    var passwordNumeric = prompt("Do you want numeric characters? (Yes/No)");
    var passwordSpecialCharacters = prompt(
      "Do you want special characters (Yes/No?"
    );

    if (passwordLowerCase.toLowerCase() === "yes") {
      passwordLowerCase = true;
      characterTypeCounter = characterTypeCounter + 1;
    } else if (passwordLowerCase.toLowerCase() === "no") {
      passwordLowerCase = false;
    } else {
      alert(
        "You didn't select a valid input for lower case promp. Lower case added by default."
      );
      passwordLowerCase = true;
      characterTypeCounter = characterTypeCounter + 1;
    }

    if (passwordUpperCase.toLowerCase() === "yes") {
      passwordUpperCase = true;
      characterTypeCounter = characterTypeCounter + 1;
    } else if (passwordUpperCase.toLowerCase() === "no") {
      passwordUpperCase = false;
    } else {
      alert(
        "You didn't select a valid input for upper case prompt. Upper case added by default."
      );
      passwordUpperCase = true;
      characterTypeCounter = characterTypeCounter + 1;
    }

    if (passwordNumeric.toLowerCase() === "yes") {
      passwordNumeric = true;
      characterTypeCounter = characterTypeCounter + 1;
    } else if (passwordNumeric.toLowerCase() === "no") {
      passwordNumeric = false;
    } else {
      alert(
        "You didn't select a valid input for numeric charachetrs prompt. Letters selected by default."
      );
      passwordNumeric = true;
      characterTypeCounter = characterTypeCounter + 1;
    }

    if (passwordSpecialCharacters.toLowerCase() === "yes") {
      passwordSpecialCharacters = true;
      characterTypeCounter = characterTypeCounter + 1;
    } else if (passwordSpecialCharacters.toLowerCase() === "no") {
      passwordSpecialCharacters = false;
    } else {
      alert(
        "You didn't select a valid input for special characters prompt. NO special characters by default."
      );
      passwordSpecialCharacters = false;
    }

    if (
      passwordLowerCase ||
      passwordUpperCase ||
      passwordNumeric ||
      passwordSpecialCharacters
    ) {
      if (passwordLowerCase) {
        var lowerCaseSelection = "abcdefghijklmnopqrstuvwxyz";

        for (i = 0; i < passwordLength / characterTypeCounter; i++) {
          var randomNumber = Math.floor(Math.random() * lowerCaseSelection.length);
          passwordHolder =
            passwordHolder + lowerCaseSelection.charAt(randomNumber);
        }
      }

      if (passwordUpperCase) {
        var upperCaseSelection = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        for (i = 0; i < passwordLength / characterTypeCounter; i++) {
          var randomNumber = Math.floor(Math.random() * upperCaseSelection.length);
          passwordHolder =
            passwordHolder + upperCaseSelection.charAt(randomNumber);
        }
      }

      if (passwordSpecialCharacters) {
        var numericSelection = "0123456789";

        for (i = 0; i < passwordLength / characterTypeCounter; i++) {
          var randomNumber = Math.floor(Math.random() * numericSelection.length);
          passwordHolder =
            passwordHolder + numericSelection.charAt(randomNumber);
        }
      }

      if (passwordSpecialCharacters) {
        var specialCharacterSelection = "!@#$%_/&";

        for (i = 0; i < passwordLength / characterTypeCounter; i++) {
          var randomNumber = Math.floor(Math.random() * specialCharacterSelection.length);
          passwordHolder =
            passwordHolder + specialCharacterSelection.charAt(randomNumber);
        }
      }
    }

    return passwordHolder;
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);
