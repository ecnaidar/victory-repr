import React from "react";
import "./index.css";
import App from "./App";
import { initializeStore } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";

import {
  translations,
  configure as configureTranslations
} from "./translations";

class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      store: initializeStore(),
      locale: configureTranslations()
    };
  }

  render() {
    const { store, locale } = this.state;
    return (
      <Provider store={store}>
        <IntlProvider locale={locale} messages={translations[locale]}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </IntlProvider>
      </Provider>
    );
  }
}

export default Root;
