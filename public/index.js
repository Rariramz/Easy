// import { renderHeader } from "./components/Header/header.js";
// import { renderHeaderExtra } from "./components/Header/headerExtra.js";
// import { renderFooter } from "./components/Footer/footer.js";
// import { renderGreeting } from "./components/Greeting/greeting.js";
// import { renderDashboard } from "./components/Dashboard/dashboard.js";
// import { renderSignIn } from "./components/Authorization/signIn.js";
// import { renderSignUp } from "./components/Authorization/signUp.js";
// import {
//   ROOT_HEADER,
//   ROOT_HEADER_EXTRA,
//   ROOT_MAIN,
//   ROOT_FOOTER,
// } from "./utils/roots.js";
// import {
//   COMPONENT_HEADER,
//   COMPONENT_HEADER_EXTRA,
//   COMPONENT_FOOTER,
//   COMPONENT_GREETING,
//   COMPONENT_DASHBOARD,
//   COMPONENT_SIGNIN,
//   COMPONENT_SIGNUP,
// } from "./utils/componentsNames.js";
import { makeHeader } from "./DOM/header.js";
import { makeHeaderExtra } from "./DOM/headerExtra.js";
import { makeFooter } from "./DOM/footer.js";
import { makeGreeting } from "./DOM/greeting.js";
// import { makeSignIn } from "./DOM/signIn.js";
// import { makeSignUp } from "./DOM/signUp.js";
// import { makeDashboard } from "./DOM/dashboard.js";

// const getComponent = (componentName) => {
//   switch (componentName) {
//     case COMPONENT_HEADER:
//       return renderHeader();
//     case COMPONENT_HEADER_EXTRA:
//       return renderHeaderExtra();
//     case COMPONENT_FOOTER:
//       return renderFooter();
//     case COMPONENT_GREETING:
//       return renderGreeting();
//     case COMPONENT_DASHBOARD:
//       return renderDashboard();
//     case COMPONENT_SIGNIN:
//       return renderSignIn();
//     case COMPONENT_SIGNUP:
//       return renderSignUp();
//     default:
//       return renderGreeting();
//   }
// };

makeHeader();
makeHeaderExtra();
makeFooter();
makeGreeting();
