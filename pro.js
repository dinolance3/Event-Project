$(document).ready(function () {
    // Function to handle tab change event
    function handleTabChange(targetTab) {
        // Load the content of general-settings.html into the 'General' tab
        if (targetTab === '#account-general') {
            $('#account-general').load('general-settings.html');
        } else {
            // For other tabs, load the content as needed
            // Example: $('#account-change-password').load('change-password.html');
        }
        $(this).tab('show');
    }

    // Function to handle edit information button click
    function handleEditInfo() {
        $('#edit-info-section').show();
    }

    // Function to handle save profile button click
    function handleSaveProfile() {
        // Perform save profile logic here
        $('#edit-info-section').hide();
        alert('Changes saved successfully!');
    }

    // Function to handle the click event for the "Change Password" button
    function handleChangePassword() {
        // Validate password fields before proceeding
        if (validatePasswordFields()) {
            // Perform the password change logic here
            alert('Password changed successfully!');
        }
    }

    // Function to handle the click event for the "Create Event" button
    function handleCreateEvent() {
        // Show the event form fields
        $('#event-form-fields').show();
        // Add the "Save" button for creating events
        $('#save-event-btn').show();
    }

    // Function to handle the click event for the "Save Event" button
    function handleSaveEvent() {
        // Perform save event logic here
        alert('Event created successfully!');
        // Additional logic or function calls can be added here
    }

    // Function to validate password fields
    function validatePasswordFields() {
        var oldPassword = $('#oldPassword').val();
        var newPassword = $('#newPassword').val();
        var confirmPassword = $('#confirmPassword').val();

        // Check if any field is empty
        if (oldPassword === '' || newPassword === '' || confirmPassword === '') {
            alert('Please fill in all password fields.');
            return false;
        }

        // Add your custom logic for password validation, e.g., minimum length, complexity, etc.
        // For example, checking if the new password and confirm password match
        if (newPassword !== confirmPassword) {
            alert('New password and confirm password do not match.');
            return false;
        }

        // Add more password validation logic as needed

        return true;
    }

    // Event handlers
    $('.account-settings-links a').on('click', function (e) {
        e.preventDefault();
        var targetTab = $(this).attr('href');
        handleTabChange(targetTab);
    });

    $('#edit-info').on('click', handleEditInfo);

    $('#save-profile').on('click', handleSaveProfile);

    $('#change-password-btn').on('click', handleChangePassword);

    $('#create-event-btn').on('click', handleCreateEvent);

    $('#save-event-btn').on('click', handleSaveEvent);

    // Additional functionality for the "Create Line Graph" button
    $('#create-line-graph-btn').on('click', function () {
        // Replace this with your actual data
        var data = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "Total Sales",
                data: [10, 20, 15, 25, 30, 18, 24],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            }]
        };

        // Get the canvas element
        var ctx = document.getElementById('lineChartCanvas').getContext('2d');

        // Create the line chart
        var myLineChart = new Chart(ctx, {
            type: 'line',
            data: data,
        });
    });
});