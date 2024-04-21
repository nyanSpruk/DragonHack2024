// Define constant key for localStorage
const LOGIN_STATE_KEY = 'isLoggedIn';
const USER_KEY = 'user';

// Initialize isLoggedIn with the value stored in localStorage or false if not found
let isLogedIn = localStorage.getItem(LOGIN_STATE_KEY) === 'true';

export function setIsLoggedIn(user: string) {
    isLogedIn = true;
    localStorage.setItem(USER_KEY, user);
    localStorage.setItem(LOGIN_STATE_KEY, 'true');
}

export function getUser(): string {
    return localStorage.getItem(USER_KEY) || '';
}

export function LogOut() {
    isLogedIn = false;
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(LOGIN_STATE_KEY);
}

export function getLogStatus(): boolean {
    return isLogedIn;
}
