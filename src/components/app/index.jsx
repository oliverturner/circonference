import * as React from "react";

import { App, AppHeader, AppMain, AppFooter } from "./styles";
import Header from "./components/header";
import Main from "../main";
import Footer from "./components/footer";

const Component = () => (
  <App>
    <AppHeader>
      <Header />
    </AppHeader>
    <AppMain>
      <Main />
    </AppMain>
    <AppFooter>
      <Footer />
    </AppFooter>
  </App>
);

export default Component;
