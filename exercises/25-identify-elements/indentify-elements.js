(function () {
  /**
   * When the user clicks on one of the "Select" buttons to select a plan,
   * show a thank message with the plan's name inside of the aqua green notification at the top of the screen.
   *
   * For example, if the user chooses "Premium", display:
   * "Thank you for purchasing the Premium plan!"
   *
   * You must use "document.querySelectorAll" to solve this problem.
   *
   * You can edit the HTML on the page to solve this problem.
   *
   * As a bonus, you can hide the notification before the user selects a plan.
   * You can also make the "x" icon dismiss the notification.
   */
  // Write your answer here
})();


(function () {
  const notification = document.getElementById('notification');
  const notificationMessage = document.getElementById('notificationMessage');
  const selectButtons = document.querySelectorAll('.button');
  const closeButton = document.querySelector('.delete');

  closeButton.addEventListener('click', () => {
    notification.style.display = 'none';
  });

  selectButtons.forEach(button => {
    button.addEventListener('click', () => {
      const planName = button.id;
      notificationMessage.textContent = `Thank you for purchasing the ${planName} plan!`;
      notification.style.backgroundColor = 'aquamarine';
      notification.style.display = 'block';
    });
  });
})();

