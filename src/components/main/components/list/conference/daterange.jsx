// @flow

import * as React from "react";
import styled from "styled-components";

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

const locale = navigator.language;
const format = { year: "numeric", month: "short", day: "numeric" };
const today = new Date();

const parseDate = (label: string, localeDate: string, date: Date) => {
  if (date && date >= today) {
    return (
      <DateItem>
        <DateLabel>{label}</DateLabel>
        {localeDate}
      </DateItem>
    );
  }

  return null
};

type Props = {
  start: Date,
  end: Date
};

const Component = ({ start, end }: Props) => {
  const locStart = start.toLocaleDateString(locale, format);
  const locEnd = end.toLocaleDateString(locale, format);

  if (locStart === locEnd || locEnd.length === 0) {
    return <DateRange>{parseDate("on", locStart, start)}</DateRange>;
  }

  return (
    <DateRange>
      {parseDate("start", locStart, start)}
      {parseDate("ends", locEnd, end)}
    </DateRange>
  );
};

export default Component;
