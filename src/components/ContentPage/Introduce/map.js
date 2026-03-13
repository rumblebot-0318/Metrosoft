import React from "react"
import { compose, withProps, withState, withHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import { TiCompass } from 'react-icons/ti';

//AIzaSyAMhTdeFBfOGiQCyQ2K_BfMvXC08NXWRT4
//AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg


const MapWithControlledZoom = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAMhTdeFBfOGiQCyQ2K_BfMvXC08NXWRT4&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `500px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withState("zoom", "onZoomChange", 15),
  withHandlers(() => {
    const refs = {
      map: undefined
    };

    return {
      onMapMounted: () => ref => {
        refs.map = ref;
      },
      onZoomChanged: ({ onZoomChange }) => () => {
        onZoomChange(refs.map.getZoom());
      }
    };
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultCenter={{ lat: 37.3710764, lng: 126.9481512 }}
    zoom={props.zoom}
    ref={props.onMapMounted}
    onZoomChanged={props.onZoomChanged}
  >
    <Marker
      position={{ lat: 37.3710764, lng: 126.9481512 }}
      onClick={props.onToggleOpen}
    >
      <InfoWindow onCloseClick={props.onToggleOpen}>
        <div style={{ fontWeight: "bold" }}>
          <TiCompass />
          <span style={{ fontSize: "1em" }}>
            {" "}
            안양IT밸리 607호 (주) 메트로소프트
          </span>{" "}
        </div>
      </InfoWindow>
    </Marker>
  </GoogleMap>
));

export default MapWithControlledZoom;