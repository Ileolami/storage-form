
const users = JSON.parse(localStorage.getItem('users')) || [];

const formCreate = document.querySelector('#create');
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
        alert('Please fill in all fields!');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const formLogin = document.querySelector('#login');
    formLogin.addEventListener('submit', function(e) {
        e.preventDefault();

        const loginUsername = document.querySelector('#login-username').value;
        const loginPassword = document.querySelector('#login-password').value;

        if (loginUsername && loginPassword) {
            const user = users.find(u => u.username === loginUsername && u.password === loginPassword);
            if (user) {
                alert('Login successful!');
                window.location.href = 'index.html';
            } else {
                alert('Username or password is incorrect!');
            }
        } else {
            alert('Please fill in all fields!');
        }
    });
});


// const formLogin = document.querySelector('#login');
// formLogin.addEventListener('DOMContentLoaded', function(e) {
//     e.preventDefault();

//     const loginUsername = document.querySelector('#login-username').value;
//     const loginPassword = document.querySelector('#login-password').value;

//     if (loginUsername && loginPassword) {
//         const user = users.find(u => u.username === loginUsername && u.password === loginPassword);
//         if (user) {
//             alert('Login successful!');
//             // Redirect to another page or perform necessary actions after login
//             // For example, window.location.href = 'index.html';
//             window.location.href = 'index.html';
//         } else {
//             alert('Username or password is incorrect!');
//         }
//     } else {
//         alert('Please fill in all fields!');
//     }
// });
