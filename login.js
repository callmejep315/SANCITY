function login() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    // Array of valid username and password pairs
    const validCredentials = [
        { username: 'admin', password: '123456789' },
        { username: 'topman', password: 'sdosantiagocity' },
        { username: 'rsp', password: 'recruitment' },
        { username: 'pms', password: 'performance' },
        { username: 'lnd', password: 'learning' },
        { username: 'rnr', password: 'rewards' },

    ];

    // Check if the input matches any valid pair
    const isValid = validCredentials.some(cred => 
        cred.username === usernameInput && cred.password === passwordInput
    );

    if (isValid) {
        sessionStorage.setItem('loggedIn', 'true'); // Set session storage
        window.location.href = 'home.html';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
}