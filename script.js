document.addEventListener('DOMContentLoaded', function() {
    const generatePasswordButton = document.getElementById('generatePassword');
    const generatedPasswordDisplay = document.getElementById('generatedPassword');
    const displayInput = document.getElementById('displayInput');
    const keypad = document.getElementById('keypad');
    const resultDisplay = document.getElementById('result');

    let generatedPassword = '';
    let inputPassword = '';

    generatePasswordButton.addEventListener('click', function() {
        generatedPassword = generatePassword();
        generatedPasswordDisplay.textContent = generatedPassword;
        inputPassword = '';
        displayInput.textContent = '';
        resultDisplay.textContent = '';
    });

    function generatePassword() {
        let password = '';
        for (let i = 0; i < 6; i++) {
            password += Math.floor(Math.random() * 10).toString();
        }
        return password;
    }

    function createKeypad() {
        const buttons = [
            ...Array(10).keys(), 'X', 'Submit', 'Clear'
        ];
        
        buttons.forEach((buttonText) => {
            const button = document.createElement('button');
            button.textContent = buttonText;
            button.addEventListener('click', function() {
                handleButtonClick(buttonText);
            });
            keypad.appendChild(button);
        });
    }

    function handleButtonClick(buttonText) {
        if (buttonText === 'Clear') {
            inputPassword = '';
        } else if (buttonText === 'X') {
            inputPassword = inputPassword.slice(0, -1);
        } else if (buttonText === 'Submit') {
            if (inputPassword === generatedPassword) {
                resultDisplay.textContent = '✅ Success! The passwords match.';
                resultDisplay.style.color = 'green';
            } else {
                resultDisplay.textContent = '❌ Error! The passwords do not match.';
                resultDisplay.style.color = 'red';
            }
        } else {
            if (inputPassword.length < 6) {
                inputPassword += buttonText;
            }
        }
        displayInput.textContent = inputPassword;
    }

    createKeypad();
});

