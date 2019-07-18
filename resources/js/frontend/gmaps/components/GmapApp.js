import React, { Component } from 'react';
import {
  GoogleMapProvider,
  HeatMap,
  InfoWindow,
  MapBox,
  Marker,
  Polygon,
  OverlayView
} from '@googlemap-react/core'

class GmappApp extends Component {

  constructor(props){
    super(props);

    this.state = {
      infoWindowId: null,
      clickedLocation: {},
    }
  }

  render() {

    const infoWindow = this.state.infoWindowId !== null && (
            <InfoWindow
      anchorId={"marker-" + this.state.infoWindowId}
      opts={{
      content: this.state.clickedLocation.name_it,
      }}
      visible
      />
    )
    return (
      <GoogleMapProvider>
        <MapBox
          apiKey={gmapsApiKey}
          opts={{
            center: {lat: 45.4682, lng: 9.195269999999937},
            zoom: 13,
          }}
          useDrawing
          useGeometry
          usePlaces
          useVisualization
          onCenterChanged={() => {
            console.log('The center of the map has changed.')
          }}
        />
        {this.props.locations.length > 0 &&
          this.props.locations.map((location, key) => (
            <React.Fragment>
            <Marker
            key={key}
              id={"marker-" + key}
              opts={{
                draggable: false,
                position: {lat: parseFloat(location.latitude), lng: parseFloat(location.longitude)},
                }}
              onClick={(event) => {this.setState({clickedLocation: location, infoWindowId: key})}}
            />
            {infoWindow}
  </React.Fragment>
          ))|| null}
      </GoogleMapProvider>
    )
  }
}

export default GmappApp;
