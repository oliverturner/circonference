import * as React from "react";
import styled from "styled-components";
import GMap from "google-map-react";

const Map = styled.div`
position: relative;
background: mediumseagreen;
`;

const getLocation = async options => {
  return new Promise(function(resolve, reject) {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    } else {
      resolve(localStorage.getItem("geolocation"));
    }
  });
};

class MapWrapper extends React.Component {
  state = {
    location: null
  };

  // TODO: first query localstorage then fall back to hard coded val
  static defaultProps = {
    center: { lat: 51.56, lng: -10.14 },
    zoom: 5
  };

  constructor(props) {
    super();

    const location = null;
    getLocation()
      .then(({ coords }) => {
        this.setState(() => {
          const { latitude: lat, longitude: lng } = coords;
          return { location: { lat, lng } };
        });
      })
      .catch(e => console.log(e));

    this.config = {
      key: process.env.REACT_APP_MAP_API_KEY,
      defaultCenter: location || props.center
    };
  }

  onZoomChange = zoom => {
    console.log("zoom", zoom);
  };

  onCenterChange = point => {
    console.log("point", point);
  };

  onChange = data => {
    console.log("onChange", data);
    // this.onCenterChange(center);
    // this.onZoomChange(zoom);
  };

  onChildClick = (key, childProps) => {
    this.onCenterChange([childProps.lat, childProps.lng]);
  };

  render() {
    console.log(this.state);

    return (
      <Map style={this.props.style}>
        <GMap
          bootstrapURLKeys={this.config}
          center={this.state.location}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onChildClick={this.onChildClick}
          onChange={this.onChange}
        />
      </Map>
    );
  }
}

export default MapWrapper;
