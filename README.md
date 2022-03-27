# Random Password Generator

This project is written in vanilla JavaScript with HTML and CSS markup.

It allows the user to generate a random unique password and copy it to the clipboard.

## Password parameters:

The user can define a minimum length and maximum length, as well as indicate whether to include numbers and/or special characters.

If nothing is defined by the user, the parameters will have the following default values:

* minimum length : 8 characters
* maximum length : 16 characters
* include numbers : true
* include special characters : true

## DOM Elements:

The input section contains four inputs and one button:
* Two number inputs for minimum and maximum length
* Two checkbox inputs for including numbers and/or special characters
* Generate button initiates the generatePassword function when clicked, regardless of whether the user has intereacted with any of the inputs.

The output section contains one input field and two buttons:
* The password is provided to the user in a readonly input field.
  - After generating a password generatePassword calls the setPasswordElement function which sets the value of the readonly input to the new password.
  - The readonly input is set to type=password to obsure by default.
* The 'view' button toggles the type attribute of the input from type=password to type=text so that the user can view the password if desired
* The copy button initiates the copy function when clicked, which copies the value of the password input to the clipboard.  The user is also able to focus, highlight, and manually copy the password if desired.

  ## Functions:

  The password generator runs on the following five functions:

  1. setPicklist sets the array of characters available for the password.  Includes lowercase letters, uppercase letters, numbers 0-9, and special characters !@#$%^&*_-+= by default.  Excludes numbers and/or special characters if the user unchecks those boxes.  This function is called by generatePassword.

  2. generatePassword is called by a click event on the 'generate' button.  Gets values for password parameters from the DOM elements, sets the password length to a random number between minimum and maximum inclusive, calls setPicklist, then sets password to a string of randomly selected characters from pickList, and finally calls setPasswordElement.

  3. setPasswordElement sets the value of the readonly password input field to the newly created password.

  4. copy is called by a click event on the 'copy' button and copies the value of the readonly password input to the clipboard.

  5. toggleView is called by a click event on the 'view' button and toggles the type attribute of the readonly password input between 'password' and 'text' so that the user can control visibility of the password.