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
import Modal from 'react-bootstrap4-modal';

class GmappApp extends Component {

  constructor(props){
    super(props);

    this.state = {
      modalOpen: false,
      infoWindowId: null,
      clickedLocation: {},
    }

    this.modalBackdropClicked = this.modalBackdropClicked.bind(this);

  }
  //user click outside the modal
  modalBackdropClicked(){
    this.setState({modalOpen:false})
  }

  render() {

    const infoWindow = this.state.infoWindowId !== null && (
            <InfoWindow
      anchorId={"marker-" + this.state.infoWindowId}
      visible
      >
        <p
          style={{cursor: 'pointer'}}
          onClick={()=>{this.setState({modalOpen: true})}}
        >
          {this.state.clickedLocation.name_it}
        </p>
      </InfoWindow>
    )
    return (
    <React.Fragment>
      <Modal
      visible={this.state.modalOpen}
      onClickBackdrop={this.modalBackdropClicked}
      dialogClassName={'modal-xl'}
      disablebuttons={"false"}
      >
       <div className="modal-header">
         <h5 className="modal-title">{this.state.clickedLocation.name_it}</h5>
       </div>
       <div className="modal-body">
        <div className="container-fluid mt-3 mb-5">
          <div className="row">
            <div className="col-md-6">
              <img className="img-fluid" src={this.state.clickedLocation.image_url} alt="no location image..."/>
            </div>
            <div className="col-md-6 ">
              <div className="details d-flex flex-column align-items-center justify-content-center h-100">
                 <p>{this.state.clickedLocation.address}</p>
                 <p>{this.state.clickedLocation.phonenumber}</p>
                 <p>{this.state.clickedLocation.email}</p>
              </div>
            </div>
          </div>
         </div>
         <p dangerouslySetInnerHTML={{ __html: this.state.clickedLocation['description_' + (userLanguage == 'it' ? 'it': 'en')]}}/>
       </div>
     </Modal>
      <GoogleMapProvider>
        <MapBox
          apiKey={gmapsApiKey}
          opts={{
            center: {lat: 45.4682, lng: 9.195269999999937},
            zoom: 13,
          }}
          useDrawing
          useGeometry
          //usePlaces
          //useVisualization
          onCenterChanged={() => {
            console.log('The center of the map has changed.')
          }}
        />
        {this.props.locations.length > 0 &&
          this.props.locations.map((location, key) => (
            <React.Fragment key={key}>
            <Marker
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
    </React.Fragment>

    )
  }
}

export default GmappApp;
