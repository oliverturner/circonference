import * as React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  font-size: 11px;

  > div {
    flex: 1;

    margin: 0;
    padding: 10px;
  }

  p {
    margin: 5px 0 0;

    &:first-child {
      margin: 0;
    }
  }
`;

const FooterWrapper = () => (
  <Footer>
    <div>
      <p>
        The data is based on conference lists from Heather Wilde and Cory House.
      </p>
      <p>Site compiled by Ryan Lanciaux using Create React App with Griddle</p>
    </div>
    <div>
      <p>
        This is a community maintained site/list provided as-is without
        guarantee or warranty.
      </p>
      <p>
        If you notice an issue or innacuracy, please file an issue/PR on GitHub.
      </p>
    </div>
  </Footer>
);

export default FooterWrapper;
