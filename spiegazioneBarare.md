# SPIEGAZIONE

1. **Classe Application**:
   - La classe `Application` gestisce la logica dell'applicazione. È responsabile del mantenimento degli utenti, dell'username attualmente loggato e fornisce metodi per effettuare il login, il logout e ottenere informazioni sui login.

   - Il metodo `onLogin(username)` viene chiamato quando un utente effettua il login. Memorizza l'username nell'istanza corrente dell'applicazione, lo salva nel localStorage e tiene traccia del tempo del login aggiungendo un oggetto all'array `users` con l'username e l'orario del login.

   - Il metodo `onLogout()` viene chiamato quando un utente effettua il logout. Azzera l'username attualmente loggato.

   - I metodi `getLoginCount()` e `getLoginTimes()` forniscono rispettivamente il numero di login effettuati e gli orari dei login.

2. **Window.onload**:
   - All'interno della funzione `window.onload`, viene istanziata un'istanza della classe `Application` chiamata `app`.

   - Si verifica se un username è già stato memorizzato nel localStorage. Se sì, significa che l'utente è già loggato e viene visualizzata l'interfaccia per l'utente loggato. Viene creato un bottone di logout che, quando cliccato, effettuerà il logout dell'utente.

   - Se non esiste alcun username memorizzato nel localStorage, viene visualizzata l'interfaccia per l'utente non loggato. Viene creato un modulo di login con un campo per l'username e un bottone di login. Quando l'utente inserisce un nome utente e preme il pulsante di login, viene effettuato il login, e le informazioni relative all'utente loggato vengono mostrate insieme a un bottone di logout.

3. **Gestione del login**:
   - Quando l'utente preme il pulsante di login, viene controllato se è stato inserito un nome utente. Se sì, viene chiamato il metodo `onLogin(username)` dell'istanza dell'applicazione `app`, che memorizza l'username e gestisce le operazioni relative al login.

4. **Gestione del logout**:
   - Quando l'utente preme il pulsante di logout, viene chiamato il metodo `onLogout()` dell'istanza dell'applicazione `app`, che azzera l'username attualmente loggato.

5. **Visualizzazione delle informazioni dell'utente**:
   - Le informazioni sull'utente loggato vengono visualizzate all'interno di un elemento `div` con id "user-info". Questo elemento viene creato dinamicamente e aggiunto al corpo del documento HTML. Le informazioni includono l'username, il numero di login effettuati e gli orari dei login. Quando l'utente effettua il logout, questo elemento viene rimosso dal documento.