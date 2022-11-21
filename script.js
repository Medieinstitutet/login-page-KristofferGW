document.body.style.backgroundColor = "black";
document.body.style.color = "white";

const userNameField = document.getElementById("userNameField");
const passwordField = document.getElementById("passwordField");
const logInBtn = document.getElementById("logInBtn");
let loggedInOrNot = [];

let users = [
    {"name": "Janne", "password": "test"}
]

// KOLLA OM ANVÄNDAREN ÄR INLOGGAD MED HJÄLP AV LOCAL STORAGE
if (localStorage.getItem("loggedInOrNot")) {
    //Hämta inloggade användare i localStorage

    //Kolla att den inloggade användaren är matchad mot users med funktionen isUserRegistered();

    // Kalla på loggedInMenu();

    // Kalla på loggedInMain();
} else {
    //Kalla på notLoggedInMenu();

    //Kalla på notLoggedInMain();
};

function notLoggedInMenu() {
    //Skapa inputs för användarnamn och lösenord i main.

    //Skapa logga in knapp med eventListener.
        //När användaren klickar på knappen, kolla att användarnamn och lösenord finns som användare med isUserRegistered();

    //OM användaren är registererad, kalla på loggedInMenu(); och loggedInMain();

    //OM användaren inte är registerarad, kalla på incorrectLogIn();

}

function notLoggedInMain() {
    //printa text som välkomnar användaren och ber dem logga in.
}

function isUserRegistered() {
    //kolla att användaramn och lösenord som användaren angivit finns i arrayen users. Returnera true eller false.
}

function loggedInMenu() {
    //Skapa logga ut-knapp

    //eventListener på knappen som tömmer localStorage och kallar på notLoggedInMenu() och notLoggedInMain().
}

function loggedInMain() {
    //Hälsa på användaren med namn.
}

function incorrectLogIn() {
    //Tala om för användaren att de angivit fel användarnamn eller lösenord.
}