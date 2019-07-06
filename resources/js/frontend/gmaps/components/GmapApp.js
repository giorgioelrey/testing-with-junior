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
  render() {
    return (
      <GoogleMapProvider>
        <MapBox
          apiKey="apikey"
          opts={{
            center: {lat: 39, lng: 116},
            zoom: 14,
          }}
          useDrawing
          useGeometry
          usePlaces
          useVisualization
          onCenterChanged={() => {
            console.log('The center of the map has changed.')
          }}
        />
        <Marker
          id="marker"
          opts={{
            draggable: true,
            label: 'hello',
            position: {lat: 39, lng: 116},
          }}
        />
        <InfoWindow
          opts={{
            content: 'This is an info window',
            position: {lat: 39.01, lng: 115.99},
          }}
          visible
        />
        <Polygon
          id="polygon"
          opts={{
            path: [
              {lat: 38.98, lng: 116.01},
              {lat: 38.98, lng: 116.03},
              {lat: 38.99, lng: 116.03},
            ],
            strokeColor: 'cyan',
          }}
        />
        <HeatMap
          opts={{
            data: [
              {lat: 38.982, lng: 116.037},
              {lat: 38.982, lng: 116.035},
              {lat: 38.985, lng: 116.047},
              {lat: 38.985, lng: 116.045},
            ],
          }}
        />
        <OverlayView position={{lat: 39, lng: 116}}>
          <h2>⚑ This is a custom overlay 🙌</h2>
        </OverlayView>
      </GoogleMapProvider>
    )
  }
}

export default GmappApp;
