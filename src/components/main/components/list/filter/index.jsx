import * as React from "react";
import styled from "styled-components";

const Filter = styled.form`
  display: flex;
  align-items: center;

  padding: 10px;
`;

const FilterLabel = styled.label``;

const FilterInput = styled.input`
  flex: 1;

  margin: 0 0 0 5px;
  padding: 5px 10px;
  border: 1px solid #666;
  border-radius: 5px;
  font-size: inherit;
`;

const filterId = "filter";

const FilterWrap = ({ style }) => (
  <Filter style={style}>
    <FilterLabel htmlFor={filterId}>Filter:</FilterLabel>
    <FilterInput id={filterId} placeholder="filter by name" />
  </Filter>
);

export default FilterWrap;
