import { ROOT_HEADER_EXTRA } from "../utils/roots.js";
import { renderHeaderExtra } from "../components/Header/headerExtra.js";

export const makeHeaderExtra = () => {
  ROOT_HEADER_EXTRA.innerHTML = renderHeaderExtra();

  const nav = document.getElementsByClassName("header__selects")[0];
  const headerExtra = document.getElementById("headerExtra");
  const headerLeft = document.getElementById("headerLeft");

  const mediaQueryList = window.matchMedia("(max-width: 767px)");

  function screenTest(e) {
    if (e.matches) {
      headerExtra.append(nav);
    } else {
      headerLeft.append(nav);
    }
  }

  mediaQueryList.addListener(screenTest);
};
