import { renderSelect } from "./select.js";
import { getSelects } from "../../utils/api.js";

export const renderHeader = () => {
  const selects = getSelects();

  return `
    <div class="container">
        <div class="header">
            <div id="headerLeft" class="header__left">
                <a id="headerLinkLogo">
                    <img class="header__logo" src="./images/logo.svg">
                </a>
                <nav class="header__selects">
                    ${selects.map((select) => renderSelect(select)).join("")}
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
    `;
};
