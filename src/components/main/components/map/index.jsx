// @flow

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

type Props = {
  style: any,
  zoom: number,
  mapConfig: {
    key: string,
    defaultLocation: { lat: number, lng: number }
  }
};

type State = {
  location: { lat: number, lng: number }
};

class MapWrapper extends React.Component<Props, State> {
  // TODO: first query localstorage then fall back to hard coded val
  static defaultProps = {
    zoom: 4,
    mapConfig: {
      key: process.env.REACT_APP_MAP_API_KEY,
      defaultCenter: { lat: 51.56, lng: -10.14 }
    }
  };

  constructor(props: Props) {
    super();

    const geolocation = localStorage.getItem("geolocation");
    const location = typeof geolocation === "string"
      ? JSON.parse(geolocation)
      : props.mapConfig.defaultLocation;

    this.state = {
      location
    };

    getLocation()
      .then(({ coords }: Position) => {
        const { latitude: lat, longitude: lng } = coords;
        localStorage.setItem("geolocation", JSON.stringify({ lat, lng }));

        this.setState(() => ({ location: { lat, lng } }));
      })
      .catch(e => console.log(e));
  }

  onZoomChange = zoom => {
    console.log("zoom", zoom);
  };

  onCenterChange = point => {
    console.log("point", point);
  };

  onChange = ({center, zoom}) => {
    console.log("onChange", center, zoom);
    this.onCenterChange(center);
    this.onZoomChange(zoom);
  };

  onChildClick = (key, childProps) => {
    this.onCenterChange([childProps.lat, childProps.lng]);
  };

  render() {
    console.log(this.state);

    return (
      <Map style={this.props.style}>
        <GMap
          bootstrapURLKeys={this.props.mapConfig}
          center={this.state.location}
          defaultCenter={this.props.mapConfig.defaultLocation}
          defaultZoom={this.props.zoom}
          onChildClick={this.onChildClick}
          onChange={this.onChange}
        />
      </Map>
    );
  }
}

export default MapWrapper;
