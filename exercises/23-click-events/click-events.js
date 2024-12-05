(function () {
  /**
   * You have two challenges to solve below with Vanilla JavaScript.
   * You are allowed to make changes to the HTML and CSS.
   */
  /**
   * Problem 1: Alert Me
   * When the clicks on the button that says "Alert Me!", it should display an alert.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
   */
  // Write your answer here
  /**
   * Problem 2: Disable a button that will charge a credit card.
   *
   * To prevent users from charging the credit card more than once:
   * 1. Disable the button when it is clicked.
   * 2. Change the text to say e.g. "Loading ..." once it is clicked.
   */
  // Write your answer here
  
    <style>
      button {
        padding: 10px 20px;
      }
    </style>
  </head>
  <body>
    <button id="alertBtn">Alert Me!</button>
    <button id="chargeBtn">Charge Credit Card</button>
  
    <script>
      document.getElementById('alertBtn').addEventListener('click', function() {
        alert('Alert!');
      });

      document.getElementById('chargeBtn').addEventListener('click', function() {
        var chargeBtn = this;
        chargeBtn.disabled = true;
        chargeBtn.textContent = 'Loading ...';
      });
    </script>
  </body>
</html>