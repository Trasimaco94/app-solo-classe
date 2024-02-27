class Application {

    // Dati
    
     
     users = [];
     username = ""
     
    
     // Azioni
     onLogin (username) {
        this.username = username;
        localStorage.setItem("username", username);
     }
    
     onLogout () {
    this.username = ""
     }
    
    
    }
    
    
    window.onload = () => {
        // Verifica se l'utente è già loggato
        const storedUsername = localStorage.getItem("username");
        if (storedUsername) {
          app.onLogin(storedUsername);
        