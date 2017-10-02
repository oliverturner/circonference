import styled from "styled-components";

export const MapWrapper = styled.div`
  transition: 1s opacity 1s;

  position: relative;
  opacity: 0;
  opacity: ${({ rendered }) => (rendered ? 1 : 0)};

  .mapboxgl-map {
    height: 100%;
  }
`;
