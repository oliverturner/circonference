import * as React from "react";
import styled from "styled-components";

import Conference from "./conference";
import confs from "../../__fixtures__/conferences.json";

const Column = styled.div`
  flex: 1;
  
  display: flex;
  flex-direction: column;
`;

const Filter = styled.form``;
const FilterLabel = styled.label``;
const FilterInput = styled.input``;

const List = styled.div`
  flex: 1;

  overflow-y: auto;
  background: lemonchiffon;
`;

const today = new Date().getTime();
const filterId = "filter"

const ListWrapper = () => (
  <Column>
    <Filter>
      <FilterLabel htmlFor={filterId}>
        Filter
        <FilterInput id={filterId} placeholder="filter" />
      </FilterLabel>
    </Filter>
    <List>
      {confs
        .filter(c => new Date(c.eventStartDate).getTime() >= today)
        .sort((a, b) => new Date(a.eventStartDate) - new Date(b.eventStartDate))
        .map(conf => <Conference key={conf.id} {...conf} />)}
    </List>
  </Column>
);

export default ListWrapper;
