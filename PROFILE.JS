// PROFILE.js

document.addEventListener('DOMContentLoaded', function () {
  // Add click event to the "Signout" link
  var signoutLink = document.getElementById('signout');
  if (signoutLink) {
    signoutLink.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default action (e.g., navigating to a new page)
      alert('You have been signed out.'); // Show an alert (you can replace this with your sign-out logic)
    });
  }
});
