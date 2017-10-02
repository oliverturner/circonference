// @flow

import * as React from "react";
import styled from "styled-components";

import DateRange from "./daterange"

const Link = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px;
  font-size: 14px;
  text-decoration: none;
  color: inherit;

  &:nth-child(odd) {
    background: #888;
  }
`;

const Title = styled.h2`
  flex: 1;

  margin: 0;
  font-size: 16px;
  font-weight: 400;
`;

const Row = styled.div`
  flex: 0 0 260px;

  display: flex;
  justify-content: flex-end;
`;

const ConferenceWrapper = (props: Conference) => (
  <Link href={props.url}>
    <Title>{props.name}</Title>
    <Row>
      <DateRange start={props.cfpStartDate} end={props.cfpEndDate} />
      <DateRange start={props.eventStartDate} end={props.eventEndDate} />
    </Row>
  </Link>
);

export default ConferenceWrapper;
