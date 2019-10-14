export class Token {
    removeToken() {
        localStorage.removeItem('token'); 
    }

    getToken() {
        return localStorage.getItem('token'); 
    }

    saveToken(token) {
        localStorage.setItem('token', token); 
    }
}