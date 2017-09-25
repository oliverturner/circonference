import * as React from "react";
import styled from "styled-components"

import Map from "../map";
import List from "../list";

const Main = styled.div`
  flex: 1;

  display: flex;
`

const MainWrapper = () => (
  <Main>
    <Map />
    <List/>
  </Main>
);

export default MainWrapper;
