function login() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    // Array of valid username and password pairs
    const validCredentials = [
        { username: 'admin', password: '123456789' },
        { username: 'topman', password: 'sdosantiagocity' },
        { username: 'RSP', password: 'recruitment' },
        { username: 'PMS', password: 'performance' },
        { username: 'L&D', password: 'learning' },
        { username: 'R&R', password: 'rewards' },

    ];

    // Check if the input matches any valid pair
    const isValid = validCredentials.some(cred => 
        cred.username === usernameInput && cred.password === passwordInput
    );

    if (isValid) {
        sessionStorage.setItem('loggedIn', 'true'); // Set session storage
        sessionStorage.setItem('username', usernameInput); // Store username
        window.location.href = 'home.html';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
}

function loginAsGuest() {
    const guestUsername = 'guest';
    sessionStorage.setItem('loggedIn', 'true');
    sessionStorage.setItem('username', guestUsername);
    window.location.href = 'home.html';
}