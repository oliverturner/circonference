import * as React from "react";
import styled from "styled-components"

import Map from "./components/map";
import List from "./components/list";
import Form from "./components/form";

const Main = styled.div`
  flex: 1;

  display: flex;
`

const MainWrapper = () => (
  <Main>
    <Form />
    <Map />
    <List/>
  </Main>
);

export default MainWrapper;
