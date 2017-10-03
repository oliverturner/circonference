import * as React from "react";

// import { App, AppHeader, AppMain, AppFooter } from "./styles";
import Header from "./components/header";
import Main from "../main";
import Footer from "./components/footer";

import styled from "styled-components";

export const App = styled.div`
display: grid;
grid-template-rows: auto 1fr auto;
height: 100vh;
`;

const AppWrapper = () => (
  <App>
    <Header />
    <Main />
    <Footer />
  </App>
);

export default AppWrapper;
