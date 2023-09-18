const error = document.querySelector('.error');
const users = JSON.parse(localStorage.getItem('users')) || [];

const formCreate = document.querySelector('#create');
console.log(formCreate)
formCreate.addEventListener('submit', function(e) {
    e.preventDefault();

    const createUsername = document.querySelector('#create-username').value;
    const createPassword = document.querySelector('#create-password').value;

    if (createUsername && createPassword) {
        users.push({ username: createUsername, password: createPassword });
        localStorage.setItem('users', JSON.stringify(users));
        alert('User created successfully!');
        console.log(users);
    } else {
        // alert('Please fill in all fields!');
        error.style.display = 'block';
    }
    formCreate.reset();
});

