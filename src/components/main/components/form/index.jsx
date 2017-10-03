import * as React from "react";
import styled from "styled-components";
import geocoder from "geocoder";

const FormWrap = styled.div`
  position: relative;
`;

const Form = styled.form`
  transition: 0.5s top;

  position: absolute;
  top: ${({ displayed }) => (displayed ? 0 : "-100px")};
  width: 100%;
  background: white;
  z-index: 2;
`;

const FormComponent = ({ displayed, toggleForm }) => {
  geocoder.reverseGeocode(
    33.7489,
    -84.3789,
    function(err, data) {
      console.log("geocoder.reverseGeocode", data);
    },
    {
      key: process.env.REACT_APP_GOOGLEMAP_APIKEY
    }
  );

  return (
    <FormWrap displayed={displayed}>
      <Form displayed={displayed} onClick={toggleForm}>
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
    </FormWrap>
  );
};

export default FormComponent;
