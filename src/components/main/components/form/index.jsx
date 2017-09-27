import * as React from "react";
import styled from "styled-components";
import geocoder from "geocoder";

const Form = styled.form`
  position: absolute;
  
  background: white;
`;

const FormWrapper = ({ style }) => {
  geocoder.reverseGeocode(
    33.7489,
    -84.3789,
    function(err, data) {
      console.log(data);
    },
    {
      key: process.env.REACT_APP_MAP_API_KEY
    }
  );

  return (
    <Form style={style}>
      <ul>
        <li>
          <label htmlFor="" />
          <input type="text" />
        </li>
        <li>
          <label htmlFor="" />
          <input type="text" />
        </li>
        <li>
          <label htmlFor="" />
          <input type="text" />
        </li>
        <li>
          <label htmlFor="" />
          <input type="text" />
        </li>
        <li>
          <label htmlFor="" />
          <input type="text" />
        </li>
      </ul>
    </Form>
  );
};

export default FormWrapper;
