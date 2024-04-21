// Define constant key for localStorage
const LOGIN_STATE_KEY = 'isLoggedIn';

// Initialize isLoggedIn with the value stored in localStorage or false if not found
let isLogedIn = localStorage.getItem(LOGIN_STATE_KEY) === 'true';

export function setIsLoggedIn(value: boolean) {
    console.log(value);
    isLogedIn = value;
    localStorage.setItem(LOGIN_STATE_KEY, value.toString());
}

export function LogOut() {
    isLogedIn = false;
    localStorage.removeItem(LOGIN_STATE_KEY);
}

export function getLogStatus(): boolean {
    return isLogedIn;
}
