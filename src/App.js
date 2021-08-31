import React, { useState, useEffect } from "react";
import './App.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Default from "./layouts/Default.jsx";
import { IntlProvider } from "react-intl";
import Footer from "./components/Shared/Footer/Footer";
import * as locales from "./translations/locale";
import translate from "./translations/translate";
import { dataLocalStorage } from "./localStorage";


function App() {

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 600)
  }, [])


  const [locale, setLocale] = useState(dataLocalStorage.getLocale() || locales.enUS);
  return (
    <div>
      <IntlProvider locale={locale} formats={{ number: "en" }} messages={translate[locale]}>
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Default} />

            </Switch>
            <Footer locale={locale} setLocale={setLocale} />
          </BrowserRouter>
        </div>
      </IntlProvider>
    </div>
  )
}

export default App;
