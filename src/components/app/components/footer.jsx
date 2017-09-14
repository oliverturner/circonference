import * as React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;

  p {
    flex: 1;
    
    margin: 0;
    padding: 20px;
  }
`;

const Component = () => (
  <Footer>
    <p>
      The data is based on conference lists from Heather Wilde and Cory House.
      Site compiled by Ryan Lanciaux using Create React App with Griddle
    </p>
    <p>
      This is a community maintained site/list provided as-is without guarantee
      or warranty. If you notice an issue or innacuracy, please file an issue/PR
      on GitHub.
    </p>
  </Footer>
);

export default Component;
