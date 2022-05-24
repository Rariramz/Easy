import { ROOT_FOOTER } from "../utils/roots.js";
import { renderFooter } from "../components/Footer/footer.js";

export const bindFooter = () => {
  ROOT_FOOTER.innerHTML = renderFooter();
};
