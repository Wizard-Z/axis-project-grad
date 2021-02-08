import LandingPage from "./Components/LandingPage";
import PartnersAvailable from "./Components/PartnersAvailable";
import DynamicForms from "./Components/DynamicForms";
import Testing from "./Components/ProductsAmplify";
import DynamicQuotes from "./Components/DynamicQuotes";
export default Object.freeze({
  LANDING_PAGE: {
    name: LandingPage,
    route: "/",
  },
  PARTNERS_AVAILABLE: {
    name: PartnersAvailable,
    route: "/insurance/:id",
  },

  DYNAMIC_FORMS: {
    name: DynamicForms,
    route: "/insurance/:product/:name/form",
  },
  DYNAMIC_QUOTES: {
    name: DynamicQuotes,
    route: "/insurance/get/Quotes",
  },
  TESTING: {
    name: Testing,
    route: "/testing",
  },
});
