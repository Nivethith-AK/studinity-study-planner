// Initialize Feather Icons
feather.replace();

// Firebase configuration (replace with your own)
const firebaseConfig = {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "YOUR_FIREBASE_DOMAIN",
    projectId: "YOUR_FIREBASE_PROJECT_ID",
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// === MODAL HANDLING ===
const loginModal = document.getElementById('login-modal');
const signupModal = document.getElementById('signup-modal');
const loginBtn = document.getElementById('login-nav-btn');
const showSignupLink = document.getElementById('show-signup-link');
const showLoginLink = document.getElementById('show-login-link');

loginBtn.addEventListener('click', () => loginModal.classList.add('active'));
showSignupLink.addEventListener('click', () => {
    loginModal.classList.remove('active');
    signupModal.classList.add('active');
});
showLoginLink.addEventListener('click', () => {
    signupModal.classList.remove('active');
    loginModal.classList.add('active');
});

// === AUTHENTICATION ===
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const userEmail = document.getElementById('user-email');
const logoutBtn = document.getElementById('logout-btn');
const userInfoNav = document.getElementById('user-info-nav');
const navAuthLinks = document.getElementById('nav-auth-links');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            signupModal.classList.remove('active');
            alert("Account created successfully!");
        })
        .catch(err => alert(err.message));
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            loginModal.classList.remove('active');
        })
        .catch(err => alert(err.message));
});

logoutBtn.addEventListener('click', () => auth.signOut());

// === UPDATE UI BASED ON AUTH STATE ===
auth.onAuthStateChanged(user => {
    if (user) {
        userInfoNav.style.display = 'flex';
        navAuthLinks.style.display = 'none';
        userEmail.textContent = user.email;
    } else {
        userInfoNav.style.display = 'none';
        navAuthLinks.style.display = 'flex';
    }
});
