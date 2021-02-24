import { ThemeProvider, CssBaseline } from "@material-ui/core";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import theme from "./theme/theme";
import { BrowserRouter as Router } from "react-router-dom";
import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import LinearIndeterminate from "./components/mui-progress/mui-progress";

const fallbackLng = ["en"];
const availableLanguage = ["en", "id"];

const options = {
  order: ["navigator", "htmlTag", "path", "subdomain"],
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,
  caches: ["localStorage", "cookie"],
  excludeCacheFor: ["cimode"],
  cookieMinutes: 10,
  cookieDomain: "myDomain",
  htmlTag: document.documentElement,
  checkWhitelist: true,
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng,
    whitelist: availableLanguage,
    detection: options,
    interpolation: {
      escapeValue: false,
    },
  });

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<LinearIndeterminate />}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
