import * as React from "react";
import styled from "styled-components";

import Form from "./components/form";
import Map from "./components/map";
import List from "./components/list";

const Main = styled.div`
  display: grid;
  grid-template-columns: [map] 1fr [list] minmax(auto, 450px);
  grid-template-rows: 0 1fr;

  overflow: hidden;
`;

const MainWrapper = ({style}) => (
  <Main style={style}>
    <Form style={{ gridColumn: "1 / 2", gridRow: 1 }} />
    <Map style={{ gridColumn:"map", gridRow: 2 }} />
    <List style={{ gridColumn:"list", gridRow: 2 }} />
  </Main>
);

export default MainWrapper;
