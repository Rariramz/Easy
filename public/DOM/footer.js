import { ROOT_FOOTER } from "../utils/roots.js";
import { renderFooter } from "../components/Footer/footer.js";

export const makeFooter = () => {
  ROOT_FOOTER.innerHTML = renderFooter();
};
