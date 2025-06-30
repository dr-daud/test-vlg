document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('tel');
    const phoneLabel = document.getElementById('phone-label')
    const nameLabel = document.getElementById('name-label')
    let maskInstance = null;

    const form = document.getElementById('contact-us');

    const nameErrorMsg = document.createElement('div');
    nameErrorMsg.classList.add('error-message');
    nameLabel.appendChild(nameErrorMsg);

    const phoneErrorMsg = document.createElement('div');
    phoneErrorMsg.classList.add('error-message');
    phoneLabel.appendChild(phoneErrorMsg);

    phoneInput.addEventListener('focus', function () {
        if (!maskInstance) {
            maskInstance = IMask(phoneInput, {
                mask: '+{7}(000)-000-00-00'
            });
        }
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let isValid = true;

        [phoneInput, nameInput].forEach(input => input.classList.remove('error'));
        [phoneLabel, nameLabel].forEach(label => label.classList.remove('error-label'));
        [nameErrorMsg, phoneErrorMsg].forEach(msg => msg.textContent = '');

        if (nameInput.value.trim() === '') {
            nameInput.classList.add('error');
            nameLabel.classList.add('error-label')
            nameErrorMsg.textContent = 'Является обязательным полем';
            isValid = false;
        } else if (nameInput.value.trim().length < 2) {
            nameInput.classList.add('error');
            nameLabel.classList.add('error-label')
            nameErrorMsg.textContent = 'Имя должно содержать 2 или больше символов';
            isValid = false;
        }

        const phoneDigits = phoneInput.value.replace(/\D/g, '');
        if (phoneInput.value.trim() === '' || phoneDigits.length < 11) {
            phoneInput.classList.add('error');
            phoneLabel.classList.add('error-label')
            phoneErrorMsg.textContent = 'Введите полный номер телефона';
            isValid = false;
        }

        if (isValid) {
            console.log("Имя:", nameInput.value, 'Номер телефона:', phoneInput.value)
            nameInput.value = ''
            phoneInput.value = ''
        }
    });

    [nameInput, phoneInput].forEach(input => {
        input.addEventListener('input', () => {
            input.classList.remove('error');

            if (input === nameInput) {
                nameLabel.classList.remove('error-label');
                nameErrorMsg.textContent = '';
            }

            if (input === phoneInput) {
                phoneLabel.classList.remove('error-label');
                phoneErrorMsg.textContent = '';
            }
        });

        input.addEventListener('focus', () => {
            if (input === nameInput) {
                nameErrorMsg.textContent = '';
            }

            if (input === phoneInput) {
                phoneErrorMsg.textContent = '';
            }
        })
    });
});

