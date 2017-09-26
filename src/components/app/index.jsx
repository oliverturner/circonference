import * as React from "react";

// import { App, AppHeader, AppMain, AppFooter } from "./styles";
import Header from "./components/header";
import Main from "../main";
import Footer from "./components/footer";

import styled from "styled-components";

export const App = styled.div`
display: grid;
grid-template-rows: [head] auto [main] 1fr [footer] auto;
height: 100vh;
`;

const AppWrapper = () => (
  <App>
    <Header style={{ gridRow: "head" }} />
    <Main style={{ gridRow: "main" }} />
    <Footer style={{ gridRow: "footer" }} />
  </App>
);

export default AppWrapper;
