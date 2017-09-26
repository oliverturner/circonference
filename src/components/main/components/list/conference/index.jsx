// @flow

import * as React from "react";
import styled from "styled-components";

const Link = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px;
  font-size: 14px;
  text-decoration: none;
  color: inherit;

  &:nth-child(odd) {
    background: #eee;
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

const DateRange = styled.div`margin: 0 0 0 20px;`;

const DateItem = styled.p`
  margin: 0;
  text-align: right;
`;

const DateLabel = styled.span`
  display: inline-block;
  margin-right: 5px;
  font-variant: small-caps;
  color: #666;
`;

const locale = navigator.language || navigator.userLanguage;
const format = { year: "numeric", month: "short", day: "numeric" };
const today = new Date();

const parseDate = (label: string, date: Date) => {
  if (date && date >= today) {
    return (
      <DateItem>
        <DateLabel>{label}</DateLabel>
        {date.toLocaleDateString(locale, format)}
      </DateItem>
    );
  }

  return <DateItem>&nbsp;</DateItem>;
};

const ConferenceWrapper = (props: Conference) => (
  <Link href={props.url}>
    <Title>{props.name}</Title>
    <Row>
      <DateRange>
        {parseDate("start", props.cfpStartDate)}
        {parseDate("end", props.cfpEndDate)}
      </DateRange>
      <DateRange>
        {parseDate("start", props.eventStartDate)}
        {parseDate("end", props.eventEndDate)}
      </DateRange>
    </Row>
  </Link>
);

export default ConferenceWrapper;
