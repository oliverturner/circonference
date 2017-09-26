import * as React from "react";
import geocoder from "geocoder";

const Form = ({style}) => {
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

  return <form style={style}/>;
};

export default Form;
