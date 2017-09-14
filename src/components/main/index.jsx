import * as React from "react";
import styled from "styled-components"

import Map from "../map";
import List from "../list";

const Main = styled.div`
  flex: 1;

  display: flex;

  background: hotpink;
`

const Component = () => (
  <Main>
    <Map />
    <List/>
  </Main>
);

export default Component;
