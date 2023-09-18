const error = document.querySelector('.error');

document.addEventListener('DOMContentLoaded', function() {
    const formLogin = document.getElementById('login');
    console.log(formLogin);
    formLogin.addEventListener('submit', function(e) {
        e.preventDefault();

        const loginUsername = document.querySelector('#login-username').value;
        const loginPassword = document.querySelector('#login-password').value;

        if (loginUsername && loginPassword) {
            const user = users.find(u => u.username === loginUsername && u.password === loginPassword);
            if (user) {
                const dashBoard = document.querySelector('#dashboard');
                dashBoard.style.display = 'block';
            } else {
                // alert('username and password not found!');
                error.style.display = 'block';
            }
        } else {
            // alert('Please fill in all fields!');
            error.style.display = 'block';
        }
        formLogin.reset();
    });
});