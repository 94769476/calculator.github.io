document.addEventListener('DOMContentLoaded', function () {
    const screen = document.querySelector('input[name="screen"]');
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        const button = event.target.querySelector('button:focus'); // Get focused button
        if (!button) return; // Exit if no focused button found

        const buttonValue = button.getAttribute('data-value');

        if (buttonValue === 'AC') {
            // Clear the screen
            screen.value = '';
        } else if (buttonValue === 'DEL') {
            // Delete the last character
            screen.value = screen.value.slice(0, -1);
        } else if (buttonValue === '=') {
            // Evaluate the expression and display result
            try {
                screen.value = eval(screen.value);
            } catch (error) {
                screen.value = 'Error';
            }
        } else {
            // Append the clicked button value to the screen
            screen.value += buttonValue;
        }
    });
});
