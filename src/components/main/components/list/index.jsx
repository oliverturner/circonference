import * as React from "react";
import styled from "styled-components";

import Filter from "./filter";
import Conference from "./conference";
import confs from "../../../../__fixtures__/conferences.json";

const Column = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr;

  overflow: hidden;
`;

const Heading = styled.div`
  display: flex;
  padding: 10px 5px;

  > h1 {
    flex: 1;

    margin: 0;
    font-size: inherit;
  }

  > p {
    flex: 0 0 130px;

    margin: 0 0 0 20px;
    text-align: center;
  }
`;

const ListWrap = styled.div`overflow-y: auto;`;

const List = styled.div``;

const today = new Date().getTime();

const getConfs = confs =>
  confs
    .filter(c => new Date(c.eventStartDate).getTime() >= today)
    .map(c => {
      return {
        ...c,
        cfpStartDate: new Date(c.cfpStartDate),
        cfpEndDate: new Date(c.cfpEndDate),
        eventStartDate: new Date(c.eventStartDate),
        eventEndDate: new Date(c.eventEndDate)
      };
    })
    .sort((a, b) => a.eventStartDate - b.eventStartDate);

const ListWrapper = ({ style }) => (
  <Column style={style}>
    <Filter />
    <Heading>
      <h1>Conference</h1>
      <p>CFP</p>
      <p>Event</p>
    </Heading>
    <ListWrap>
      <List>
        {getConfs(confs).map(conf => <Conference key={conf.id} {...conf} />)}
      </List>
    </ListWrap>
  </Column>
);

export default ListWrapper;
