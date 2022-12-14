document.body.style.backgroundColor = "black";
document.body.style.color = "white";

import User from "./user.js";
import RegisteredUsers from "./registeredUsers";

//HÄMTA REGISTRERADE ANVÄNDARE
// Gär om if (!localStorage.getItem("registeredUsers")) och if (!localStorage.getItem("savedPasswords")) till en if-sats
// som letar igenom en object array.
if (!localStorage.getItem("registeredUsers")) {
    fetch("registeredUsers.json")
    .then (res => res.json())
    .then(data => {
        localStorage.setItem("registeredUsers", JSON.stringify(data))
    })
}

if (!localStorage.getItem("savedPasswords")) {
    fetch("savedPasswords.json")
    .then (res => res.json())
    .then(data => {
        localStorage.setItem("savedPasswords", JSON.stringify(data))
    })
}

//KOLLA OM NÅGON ÄR INLOGGAD
if (localStorage.getItem("userName")) {
    
    loggedInMenu();

    loggedInMain();

} else {
    notLoggedInMenu();

    notLoggedInMain();
};

function notLoggedInMenu() {
    const namePrompt = document.createElement("label");
    namePrompt.innerText = "Användarnamn: ";
    menu.appendChild(namePrompt);
    let nameField = document.createElement("input");
    menu.appendChild(nameField);
    const passPrompt = document.createElement("label");
    passPrompt.innerText = " Lösenord: ";
    menu.appendChild(passPrompt);
    let passField = document.createElement("input");
    passField.type = 'password';
    menu.appendChild(passField);

    const logInBtn = document.createElement("button");
    logInBtn.innerText = "Logga in"
    menu.appendChild(logInBtn);

    const registerBtn = document.createElement("button");
    registerBtn.innerText = "Skapa ny användare"
    menu.appendChild(registerBtn);

    registerBtn.addEventListener("click", () => {
        registerUserForm();
    })

    logInBtn.addEventListener("click", () => {
        function isUserRegistered() {
            let userName = nameField.value;
            let password = passField.value;

            //HÄMTA I EN OBJECT ARRAY ISTÄLLET
            let registeredUsers = JSON.parse(localStorage.getItem("registeredUsers"));
            let savedPasswords = JSON.parse(localStorage.getItem("savedPasswords"));

            //SKRIV OM SÅ ATT VI LETAR MATCHNING I EN OBJECT ARRAY ISTÄLLET
            if (registeredUsers.indexOf(userName) === savedPasswords.indexOf(password) && registeredUsers.indexOf(userName) >= 0) {
                localStorage.setItem("userName", userName);
                localStorage.setItem("password", password);
                return true;
            }
            
        }
        if (isUserRegistered()) {
            loggedInMenu();
            loggedInMain();

        } else {
            incorrectLogIn();
        }
    });

}

function notLoggedInMain() {

    let main = document.getElementById("main");
    main.innerText = 'Hej! Vänligen logga in genom att fylla i användarnamn och lösenord ovan och klicka på "Logga in", eller skapa en ny användare genom att klicka på "Skapa ny användare".';
}

function loggedInMenu() {

    emptyMenuRenderLogo();
    
    const logOffBtn = document.createElement("button");
    logOffBtn.innerText = "Logga ut"
    menu.appendChild(logOffBtn);


    logOffBtn.addEventListener("click", () => {
        emptyMenuRenderLogo();
        //SKRIV OM DETTA UTIFRÅN ATT ANVÄNDARNAMN OCH LÖSENORD LIGGER I SAMMA OBJECT ARRAY.
        localStorage.removeItem("userName");
        localStorage.removeItem("password");
        notLoggedInMenu();
        notLoggedInMain();
    })
}

function registerUserForm() {
    
    emptyMenuRenderLogo()
    main.innerHTML = "";
    const registerHeader = document.createElement("h2");
    registerHeader.innerText = "Registrera ny användare";
    main.appendChild(registerHeader);

    const newUserNamePrompt = document.createElement("h3");
    newUserNamePrompt.innerText = "Användarnamn";
    main.appendChild(newUserNamePrompt);

    const newUserNameField = document.createElement("input");
    main.appendChild(newUserNameField);

    const newPasswordPrompt = document.createElement("h3");
    newPasswordPrompt.innerText = "Lösenord";
    main.appendChild(newPasswordPrompt);

    const newPasswordField = document.createElement("input");
    newPasswordField .type = "password";
    main.appendChild(newPasswordField);

    const br = document.createElement("br");
    main.appendChild(br);

    const newUserBtn = document.createElement("button");
    newUserBtn.innerText ="Registrera";
    main.appendChild(newUserBtn);

    const wantToLogInText = document.createElement("p");
    wantToLogInText.innerText = "Har du redan ett konto?"
    main.appendChild(wantToLogInText);

    const backToLogIn = document.createElement("button");
    backToLogIn.innerText = "Logga in här";
    main.appendChild(backToLogIn);

    backToLogIn.addEventListener("click", () => {
        notLoggedInMenu();
        notLoggedInMain();
    })

    const registerError = document.createElement("p");

    newUserBtn.addEventListener("click", () => {
        registerNewUser();
    })
    function registerNewUser() {
        
        const newUserName = newUserNameField.value;

        const newPassword = newPasswordField.value;

        if (newUserName && newPassword) {

        //SKRIV OM KODEN NEDAN UTIFRÅN ATT ALLT LIGGER I EN OBJECT ARRAY.
        let currentUserList = JSON.parse(localStorage.getItem("registeredUsers"));

        let currentPasswords = JSON.parse(localStorage.getItem("savedPasswords"));

            if (!currentUserList.includes(newUserName)) {

                currentUserList.push(newUserName);

                currentPasswords.push(newPassword);

                localStorage.setItem("registeredUsers", JSON.stringify(currentUserList));

                localStorage.setItem("savedPasswords", JSON.stringify(currentPasswords));

            // KOMMENTAREN OVAN GÄLLER HIT.

                registrationConfirmed();
            } else {

                main.appendChild(registerError);
                registerError.innerText = "";
                registerError.innerText = "Användarnamnet du angivit finns redan. Vänligen välj ett annat."
        }
        
        } else {
            main.appendChild(registerError);
            registerError.innerText = "";
            registerError.innerText = "Du måste ange ett användarnamn och ett lösenord för att registrera ett konto.";
        }
        
    }
}

function loggedInMain() {
    //SKRIV UTIFRÅN ATT LÖSENORD OCH AANVÄNDARNAMN LIGGER I SAMMA OBJECT
    let userName = localStorage.getItem("userName");
    document.getElementById("main").innerHTML = "";
    document.getElementById("main").innerHTML = `Hej ${userName}! Välkommen till inloggat läge. <br> <img src="img/grad_dance1_blue.gif" width="400" height="auto">`;
}

function incorrectLogIn() {

    let main = document.getElementById("main");
    main.innerText = "Användarnamnet eller lösenordet är felaktigt. Vänligen försök igen.";
}

function emptyMenuRenderLogo() {
    document.getElementById("menu").innerHTML = "";
    const logo = document.createElement("h1");
    logo.innerText = "PoC inloggningssida";
    menu.appendChild(logo);

}

function registrationConfirmed() {
    notLoggedInMenu();
    let main = document.getElementById("main");
    const registeredHeader = document.createElement("h2");
    main.innerHTML = "";
    registeredHeader.innerText = "Användare registrerad";
    main.appendChild(registeredHeader);
}

