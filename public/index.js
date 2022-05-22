import { renderHeader } from "./components/Header/header.js";
import { renderHeaderExtra } from "./components/Header/headerExtra.js";
import { renderFooter } from "./components/Footer/footer.js";
import { renderGreeting } from "./components/Greeting/greeting.js";
import { renderDashboard } from "./components/Dashboard/dashboard.js";
import { renderSignIn } from "./components/Authorization/signIn.js";
import { renderSignUp } from "./components/Authorization/signUp.js";
import { ROOT_HEADER, ROOT_HEADER_EXTRA, ROOT_MAIN, ROOT_FOOTER } from "./utils/roots.js";
import { COMPONENT_HEADER, COMPONENT_HEADER_EXTRA, COMPONENT_FOOTER, COMPONENT_GREETING, COMPONENT_DASHBOARD, COMPONENT_SIGNIN, COMPONENT_SIGNUP } from "./utils/componentsNames.js"

const getComponent = (componentName) =>{
    switch(componentName) {
        case COMPONENT_HEADER:
            return renderHeader();
        case COMPONENT_HEADER_EXTRA:
            return renderHeaderExtra();
        case COMPONENT_FOOTER:
            return renderFooter();
        case COMPONENT_GREETING:
            return renderGreeting();
        case COMPONENT_DASHBOARD:
            return renderDashboard(); 
        case COMPONENT_SIGNIN:
            return renderSignIn();
        case COMPONENT_SIGNUP:
            return renderSignUp();
        default:
            return renderGreeting();
    }
};


const makeHeader = () => {
    ROOT_HEADER.innerHTML = getComponent(COMPONENT_HEADER);

    const headerLinkLogo = document.getElementById("headerLinkLogo");
    const headerBtnNightMode = document.getElementById("headerBtnNightMode");
    const headerBtnUser = document.getElementById("headerBtnUser");
    
    headerLinkLogo.addEventListener("click", (e) => {
        e.preventDefault();
        makeDashboard();
    });
    headerBtnNightMode.addEventListener("click", (e) => {
        e.preventDefault();
        //TOGGLE NIGHT MODE
    });
    headerBtnUser.addEventListener("click", (e) => {
        e.preventDefault();
        makeSignIn();
    });
    //SELECTS
};

const makeHeaderExtra = () => {
    ROOT_HEADER_EXTRA.innerHTML = getComponent(COMPONENT_HEADER_EXTRA);
    //SELECTS
};

const makeFooter = () => {
    ROOT_FOOTER.innerHTML = getComponent(COMPONENT_FOOTER);
};

const makeGreeting = () => {
    ROOT_MAIN.innerHTML = getComponent(COMPONENT_GREETING);

    const greetingLinkUser = document.getElementById("greetingLinkUser");
    greetingLinkUser.addEventListener("click", (e) => {
        e.preventDefault();
        makeSignIn();
    });
};

const makeSignIn = () => {
    ROOT_MAIN.innerHTML = getComponent(COMPONENT_SIGNIN);

    const authLinkSignUp = document.getElementById("authLinkSignUp");
    const authInputSubmitSignIn = document.getElementById("authInputSubmitSignIn");

    authLinkSignUp.addEventListener("click", (e) => {
        e.preventDefault();
        makeSignUp();
    });
    authInputSubmitSignIn.addEventListener("click", (e) => {
        e.preventDefault();
        // SIGN IN LOGIC
    });
};

const makeSignUp = () => {
    ROOT_MAIN.innerHTML = getComponent(COMPONENT_SIGNUP);

    const authLinkSignIn = document.getElementById("authLinkSignIn");
    const authInputSubmitSignUp = document.getElementById("authInputSubmitSignUp");

    authLinkSignIn.addEventListener("click", (e) => {
        e.preventDefault();
        makeSignIn();
    });
    authInputSubmitSignUp.addEventListener("click", (e) => {
        e.preventDefault();
        // SIGN UP LOGIC
    });
};

const makeDashboard = () => {
    ROOT_MAIN.innerHTML = getComponent(COMPONENT_DASHBOARD);

    const taskDescription = document.getElementById("taskDescription");
    const summary = taskDescription.getElementsByClassName("task__summary")[0];
    const details = taskDescription.getElementsByClassName("task__details")[0];
    const taskEditBtn = document.getElementById("taskEditBtn");
    const taskDeleteBtn = document.getElementById("taskDeleteBtn");
    const noteAddBtn = document.getElementById("noteAddBtn");

    taskEditBtn.addEventListener("click", (e) => {
        e.preventDefault();
        summary.classList.toggle("task__summary_active");
        details.classList.toggle("task__details_active");
        // EDIT TASK
    });
    taskDeleteBtn.addEventListener("click", (e) => {
        e.preventDefault();
        // DELETE TASK
    })
    noteAddBtn.addEventListener("click", (e) => {
        e.preventDefault();
        // CREATE NEW
    })


};

makeHeader();
makeHeaderExtra();
makeFooter();
makeGreeting();