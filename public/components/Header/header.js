import { renderSelect } from "./select.js";

export const renderHeader = () => {
    const selects = [
        {name: "Workspace", options: ["Work", "Study"]},
        {name: "Board", options: ["Project One", "Project Two"]},
    ];

    return `
    <div class="container">
        <div class="header">
            <div class="header__left">
                <a id="headerLinkLogo">
                    <img class="header__logo" src="./images/logo.svg">
                </a>
                <nav class="header__selects">
                    ${selects.map(select => renderSelect(select)).join("")}
                </nav>
            </div>
            <div class="header__right">
                <button id="headerBtnNightMode" class="header__moonBtn">
                    <img src="./images/moon.svg">
                </button>
                <button id="headerBtnUser" class="header__userBtn">
                    <img src="./images/user.svg">
                </button>
            </div>
        </div>
    </div>
    `
};