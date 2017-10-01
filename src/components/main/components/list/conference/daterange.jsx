// @flow

import * as React from "react";
import { format, differenceInCalendarMonths, differenceInDays } from "date-fns";
import styled from "styled-components";

const DateRange = styled.div`
  margin: 0 0 0 20px;
  text-align: right;
`;

const DateItem = styled.p`margin: 0;`;

// const DateLabel = styled.span`
//   display: inline-block;
//   margin-right: 5px;
//   text-transform: uppercase;
//   font-size: 11px;
//   color: #666;
// `;

const today = new Date();

type Props = {
  start: Date,
  end: Date
};

const Component = ({ start, end }: Props) => {
  const len = differenceInDays(end, start) + 1;
  const spansMonth = differenceInCalendarMonths(end, start) > 0;

  if (start < today || end < today) return null;

  if (len === 1) {
    return (
      <DateRange>
        <DateItem>{format(end, "Do MMM YYYY")}</DateItem>
      </DateRange>
    );
  }

  return (
    <DateRange>
      <DateItem>
        {format(start, spansMonth ? "Do MMM" : "Do")}
        -
        {format(end, "Do MMM YYYY")}
      </DateItem>
    </DateRange>
  );
};

export default Component;
