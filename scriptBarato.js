class Application {
    constructor() {
        this.users = [];
        this.username = "";
    }

    onLogin(username) {
        this.username = username;
        localStorage.setItem("username", username);
        this.users.push({ username: username, time: new Date().toLocaleString() });
    }

    onLogout() {
        this.username = "";
    }

    getLoginCount() {
        return this.users.filter(user => user.username === this.username).length;
    }

    getLoginTimes() {
        return this.users.filter(user => user.username === this.username).map(user => user.time);
    }
}

window.onload = () => {
    const app = new Application();

    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
        const logoutButton = document.createElement("button");
        logoutButton.textContent = "Logout";
        logoutButton.addEventListener("click", () => {
            app.onLogout();
            localStorage.removeItem("username");
            document.getElementById("login-form").style.display = "block";
            document.getElementById("logout-button").remove();
            document.getElementById("user-info").remove();
        });
        document.body.appendChild(logoutButton);

        const userInfo = document.createElement("div");
        userInfo.id = "user-info";
        userInfo.textContent = `Logged in as: ${storedUsername} | Login count: ${app.getLoginCount()} | Login times: ${app.getLoginTimes().join(', ')}`;
        document.body.appendChild(userInfo);
    } else {
        const loginForm = document.createElement("form");
        loginForm.id = "login-form";

        const usernameInput = document.createElement("input");
        usernameInput.type = "text";
        usernameInput.placeholder = "Username";
        loginForm.appendChild(usernameInput);

        const loginButton = document.createElement("button");
        loginButton.type = "button";
        loginButton.textContent = "Login";
        loginButton.addEventListener("click", () => {
            const username = usernameInput.value.trim();
            if (username) {
                app.onLogin(username);
                localStorage.setItem("username", username);
                loginForm.style.display = "none";

                const logoutButton = document.createElement("button");
                logoutButton.id = "logout-button";
                logoutButton.textContent = "Logout";
                logoutButton.addEventListener("click", () => {
                    app.onLogout();
                    localStorage.removeItem("username");
                    loginForm.style.display = "block";
                    logoutButton.remove();
                    userInfo.remove();
                });
                document.body.appendChild(logoutButton);

                const userInfo = document.createElement("div");
                userInfo.id = "user-info";
                userInfo.textContent = `Logged in as: ${username} | Login count: ${app.getLoginCount()} | Login times: ${app.getLoginTimes().join(', ')}`;
                document.body.appendChild(userInfo);
            }
        });
        loginForm.appendChild(loginButton);
        document.body.appendChild(loginForm);
    }
};
