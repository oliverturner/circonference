import * as React from "react";
import styled from "styled-components";
import GMap from "google-map-react";

const Map = styled.div`
  flex: 1;
`;

class MapWrapper extends React.Component {
  static defaultProps = {
    center: { lat: 51.56, lng: -0.14 },
    zoom: 5
  };

  constructor(props) {
    super();

    this.config = {
      key: process.env.REACT_APP_MAP_API_KEY,
      defaultCenter: props.center 
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
    return (
      <Map>
        <GMap
          bootstrapURLKeys={this.config}
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
