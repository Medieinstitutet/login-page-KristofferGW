document.body.style.backgroundColor = "black";
document.body.style.color = "white";

let usernames = "Janne";
let passwords = "test";

// KOLLA OM ANVÄNDAREN ÄR INLOGGAD MED HJÄLP AV LOCAL STORAGE
if (localStorage.getItem("loggedInOrNot")) {
    console.log("Det finns något i LS");
    //Hämta inloggade användare i localStorage
    let loggedInOrNot = JSON.parse(localStorage.getItem("loggedInOrNot"));

    //Kolla att den inloggade användaren är matchad mot users med funktionen isUserRegistered();

    // Kalla på loggedInMenu();

    // Kalla på loggedInMain();

} else {
    console.log("Det finns inget i LS");
    notLoggedInMenu();

    notLoggedInMain();
};

function notLoggedInMenu() {
    //Skapa inputs för användarnamn och lösenord i main.
    let nameField = document.createElement("input");
    menu.appendChild(nameField);
    let passField = document.createElement("input");
    menu.appendChild(passField);

    //Skapa logga in knapp med eventListener.
    const logInBtn = document.createElement("button");
    logInBtn.innerText = "Logga in"
    menu.appendChild(logInBtn);
        //När användaren klickar på knappen, kolla att användarnamn och lösenord finns som användare med isUserRegistered();
        //OM användaren är registererad, kalla på loggedInMenu(); och loggedInMain();
        //OM användaren inte är registerarad, kalla på incorrectLogIn();
    logInBtn.addEventListener("click", () => {
        function isUserRegistered() {
            //kolla att användaramn och lösenord som användaren angivit finns i arrayen users och passwords. Returnera true eller false.
            if (nameField.value == usernames && passField.value == passwords) {
                console.log("Du har angivit rätt inlogg");
                return true;
            } else {
                incorrectLogIn();
                console.log("ogiltig login från isUserRegistered");
            }
        }
        if (isUserRegistered()) {
            loggedInMenu();
            loggedInMain();
            console.log("log från dra fram inloggade menyer");
        } else {
            incorrectLogIn();
        }
    });

}

function notLoggedInMain() {
    console.log("Console log från notLoggedInMain");
    let main = document.getElementById("main");
    main.innerText = "Hej! Vänligen logga in med ditt användarnamn och lösenord ovan.";
}

function loggedInMenu() {
    //Skapa logga ut-knapp
    document.getElementById("menu").innerHTML = "";
    const logo = document.createElement("h1");
    logo.innerText = "Fort Knox"
    menu.appendChild(logo);
    
    const logOffBtn = document.createElement("button");
    logOffBtn.innerText = "Logga ut"
    menu.appendChild(logOffBtn);

    //eventListener på knappen som tömmer localStorage och kallar på notLoggedInMenu() och notLoggedInMain().
}

function loggedInMain() {
    //Hälsa på användaren med namn.
}

function incorrectLogIn() {
    //Tala om för användaren att de angivit fel användarnamn eller lösenord.
    console.log("Console log från incorrectLogIn()");
    let main = document.getElementById("main");
    main.innerText = "Användarnamnet eller lösenordet är felaktigt. Vänligen försök igen.";
}

