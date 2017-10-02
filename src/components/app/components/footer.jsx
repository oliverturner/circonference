import * as React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  font-size: 11px;
`;

const Note = styled.div`
  flex: 1;

  margin: 0;
  padding: 10px;
  background: #191a1a;
  color: #aaa;

  &:nth-child(even) {
    text-align: right;
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
    <Note>
      <p>
        The data is based on conference lists from Heather Wilde and Cory House.
      </p>
      <p>Site compiled by Ryan Lanciaux using Create React App with Griddle</p>
    </Note>
    <Note>
      <p>
        This is a community maintained site/list provided as-is without
        guarantee or warranty.
      </p>
      <p>
        If you notice an issue or innacuracy, please file an issue/PR on GitHub.
      </p>
    </Note>
  </Footer>
);

export default FooterWrapper;
