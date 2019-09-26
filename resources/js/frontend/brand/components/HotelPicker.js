import React from 'react';
import axios from 'axios';
import Modal from "react-bootstrap4-modal";


class HotelPicker extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      modalOpen: false,
      hotels: [],
      pickedHotel: {}
    }

    this.modalBackdropClicked = this.modalBackdropClicked.bind(this);
  this.getHotels = this.getHotels.bind(this);
  }

  async componentDidMount() {

    try {
        const {data} = await this.getHotels();

        this.setState({hotels: data.hotels});

    }catch(error){
    }

  }

getHotels(){
  return  axios({
      url: `/api/hotels`,
      method: 'get',
      headers: { 'X-Requested-With': 'XMLHttpRequest'},
      responseType: 'json',
  })


}

modalBackdropClicked(){
    this.setState({modalOpen:false})
}





render(){
console.log(this.state.hotels[idx]);
  return(

  <React.Fragment>
          {this.state.hotels.length > 0 &&(
            <ul className="hotel">

              {this.state.hotels.map((hotel, idx) =>(

                <li key={idx}
                    onClick={(event) => {this.setState({pickedHotel: hotel, modalOpen: true})}}


                >
                  <a style={{cursor:"pointer"}}>  {hotel[`name_${this.props.userLanguage}`]} </a>



                </li>


              ))}


            </ul>

          ) || null}



          <Modal
              visible={this.state.modalOpen}
              onClickBackdrop={this.modalBackdropClicked}
              dialogClassName={'modal-xl'}
              disablebuttons={"false"}
          >

              <div className="close_modal" onClick={()=>{this.setState({modalOpen:false})}} style={{padding: '15px'}}>
                  <img src={this.props.closeModalImg} alt="x image" />
              </div>
              <div className="modal-header">
                  <div className="title">
                      {this.state.pickedHotel[`name_${this.props.userLanguage}`]}
                      <div className="sotto_title">

                      </div>
                  </div>
              </div>

              <div className="modal-body" style={{marginTop: '150px'}}>

                  <div className="row justify-content-md-center">
                      <div className="col-md-3">
                          <div className="dettaglio-modale ">
                              <p>{this.state.pickedHotel.address}</p>
                              <p>{this.state.pickedHotel.phonenumber}</p>
                              <p>{this.state.pickedHotel.email}</p>
                          </div>
                      </div>
                      <div className="paragrafo-modale col-md-7">
                          <p dangerouslySetInnerHTML={{ __html: this.state.pickedHotel['description_' + (this.props.userLanguage == 'it' ? 'it': 'en')]}}/>
                      </div>

                  </div>


                  <div className="immagine-modale text-center">
                      <img className="img-fluid" src={this.state.pickedHotel.image_url} alt="no location image..."/>
                  </div>
              </div>
          </Modal>
















  </React.Fragment>
)
}





}
export default HotelPicker;
