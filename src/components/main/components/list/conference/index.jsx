// @flow

import * as React from "react";
import styled from "styled-components";

const Link = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px;
  text-decoration: none;
  color: inherit;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
`;

const StartDate = styled.p`margin: 0;`;

const ConferenceWrapper = (props: Conference) => (
  <Link href={props.url}>
    <Title>{props.name}</Title>
    <StartDate>{new Date(props.eventStartDate).toLocaleDateString()}</StartDate>
  </Link>
);

export default ConferenceWrapper;
