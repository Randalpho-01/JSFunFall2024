(function () {
  /**
   * You have a few problems to solve below with Vanilla JavaScript.
   * You are allowed to make changes to the HTML and CSS.
   */
  /**
   * Problem 1: Display what the user is typing or selecting from a dropdown.
   *
   * When the user types in an email address,
   * display what they are typing inside of the empty <span> tags.
   * When the user selects an option from the dropdown,
   * display what they selected inside of the empty <span> tags.
   * (See the comments in the HTML for what <span> tags to sue.)
   */
  // Write your answer here
  /**
   * Problem 2: Handle a checkbox
   *
   * A <div> that says "✓ Include promotional offers" is hidden o the screen.
   * When the user checks the "Send promotional offers to my email address" checkbox,
   * show the hidden <div> tag.
   *
   * As a bonus, see if you can hide the <div> tag if they uncheck the checkbox.
   */
  // Write your answer here.
  /**
   * Problem 3: Input validation
   *
   * There is a hidden error message "Please enter email address."
   * If the user has not typed in anything in the email address textbox,
   * show this error message.
   * If they have typed something, hide this error message.
   *
   * You can use the "input" or "change" events, but the general UX recommendation
   * is to use "blur" events for these types of error messages (form validation errors).
   */
  // Write your answer here

// Problem 1: Display what the user is typing or selecting from a dropdown

const emailInput = document.getElementById('email');
const titleSelect = document.getElementById('title');
const emailDisplay = document.querySelector('.card-body > div:nth-child(1) > span');
const titleDisplay = document.querySelector('.card-body > div:nth-child(2) > span');

emailInput.addEventListener('input', function() {
  emailDisplay.textContent = emailInput.value;
});

titleSelect.addEventListener('change', function() {
  titleDisplay.textContent = titleSelect.options[titleSelect.selectedIndex].text;
});

// Problem 2: Handle a checkbox

const checkbox = document.getElementById('shouldSendPromotions');
const hiddenDiv = document.querySelector('.hidden');

checkbox.addEventListener('change', function() {
  if (checkbox.checked) {
    hiddenDiv.style.display = 'block';
  } else {
    hiddenDiv.style.display = 'none';
  }
});

// Problem 3: Input validation

emailInput.addEventListener('blur', function() {
  const errorDiv = document.querySelector('.invalid-feedback');
  if (emailInput.value.trim() === '') {
    errorDiv.style.display = 'block';
  } else {
    errorDiv.style.display = 'none';
  }
});

})();
