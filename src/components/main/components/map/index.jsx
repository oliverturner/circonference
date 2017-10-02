// @flow

import * as React from "react";
import ReactMapboxGl from "react-mapbox-gl";

import { MapWrapper } from "./styles.js";

type MapPoint = [number, number];

type Props = {
  style: any,
  mapSettings: {
    zoom: [number],
    center: MapPoint
  }
};

type State = {
  rendered: boolean,
  zoom: [number],
  center: MapPoint
};

type GeoLocation = {
  coords: { latitude: number, longitude: number }
};

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1Ijoib2xpdmVydHVybmVyIiwiYSI6ImNqOGFkZGFobjBjMXozM3FyMDAweGg4NWMifQ.EfJv0SZRUmVHmVdt-haIMw",
  attributionControl: false
});

const getLocation = () => {
  return new Promise(function(resolve, reject) {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      resolve(localStorage.getItem("geolocation"));
    }
  });
};

const parseCoordinates = ({ coords }: GeoLocation): MapPoint => {
  const { latitude, longitude } = coords;
  return [longitude, latitude];
};

class MapComponent extends React.Component<Props, State> {
  static defaultProps = {
    apiKey: process.env.REACT_APP_MAP_API_KEY,
    mapSettings: {
      zoom: [1],
      center: [51.56, -10.14]
    }
  };

  constructor(props: Props) {
    super();

    const stored = localStorage.getItem("mapSettings");
    const mapState = typeof stored === "string" ? JSON.parse(stored) : {};

    this.state = { ...props.mapSettings, ...mapState, rendered: false };

    getLocation()
      .then(parseCoordinates)
      .then(center => {
        const mapSettings = { center, zoom: [4] };
        localStorage.setItem("mapSettings", JSON.stringify(mapSettings));
        this.setState((prevState: State) => ({ ...prevState, ...mapSettings }));
      })
      .catch((e: Error) => console.log(e));
  }

  onMapRender = () => {
    if (!this.state.rendered) this.setState({ rendered: true });
  };

  render() {
    console.log(this.state);

    return (
      <MapWrapper style={this.props.style} rendered={this.state.rendered}>
        <Map
          style="mapbox://styles/mapbox/dark-v9"
          zoom={this.state.zoom}
          center={this.state.center}
          onRender={this.onMapRender}
        />
      </MapWrapper>
    );
  }
}

export default MapComponent;
