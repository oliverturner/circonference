import * as React from "react";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 10px;
  background: var(--brand);
  color: white;
`;

const Title = styled.h1`
  margin: 0;
  font-size: large;
  font-weight: normal;
`;

const HeaderWrapper = () => (
  <Header>
    <Title>Conference Radar</Title>
  </Header>
);

export default HeaderWrapper;
