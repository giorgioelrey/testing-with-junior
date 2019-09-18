import React from 'react';
import axios from 'axios';
import SelectFormikField from "../../../backend/react/components/dashboard/forms/SelectFormikField";
import Modal from "react-bootstrap4-modal";

class BrandLocationPicker extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            modalOpen: false,
            pickedStreetId: 1,
            boutiques: [],
            pickedBoutique: {}
        };

        this.modalBackdropClicked = this.modalBackdropClicked.bind(this);
        this.updateBrandListByStreetId = this.updateBrandListByStreetId.bind(this);
        this.getBoutiquesByStreetId = this.getBoutiquesByStreetId.bind(this);
        this.onStreetChange = this.onStreetChange.bind(this);
    }

    async componentDidMount() {

        this.updateBrandListByStreetId(this.state.pickedStreetId);

    }

    //user click outside the modal
    modalBackdropClicked(){
        this.setState({modalOpen:false})
    }

    async updateBrandListByStreetId(streetId){

        try {
            const {data} = await this.getBoutiquesByStreetId(this.state.pickedStreetId);

            this.setState({boutiques: data.boutiques});

        }catch(error){

        }
    }

    getBoutiquesByStreetId(streetId){

        return  axios({
            url: `/api/boutiques-for-street/${this.state.pickedStreetId}`,
            method: 'get',
            headers: { 'X-Requested-With': 'XMLHttpRequest'},
            responseType: 'json',
        })

    }

    async onStreetChange(e) {
        this.setState({pickedStreetId: e.target.value},
    () => {

        this.updateBrandListByStreetId(this.state.pickedStreetId);

        })
    }

    render(){

        const boutiquesForStreet = this.state.boutiques.length > 0 && (
            <ul>
                {this.state.boutiques.map((boutique, idx) =>
                <li key={idx}
                    onClick={(event) => {this.setState({pickedBoutique: boutique, modalOpen: true})}}
                >
                    {boutique[`name_${this.props.userLanguage}`]}
                </li>
                )}
            </ul>
        ) || null;

        return(
            <React.Fragment>

                <select value={this.state.pickedStreetId}
                        onChange={this.onStreetChange}>
                    {this.props.streets.map((street, idx) => <option key={idx} value={street.id}>{street.name_it}</option>)}
                </select>

                {boutiquesForStreet}

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
                            {this.state.pickedBoutique[`name_${this.props.userLanguage}`]}
                            <div className="sotto_title">

                            </div>
                        </div>
                    </div>

                    <div className="modal-body" style={{marginTop: '150px'}}>

                        <div className="row justify-content-md-center">
                            <div className="col-md-3">
                                <div className="dettaglio-modale ">
                                    <p>{this.state.pickedBoutique.address}</p>
                                    <p>{this.state.pickedBoutique.phonenumber}</p>
                                    <p>{this.state.pickedBoutique.email}</p>
                                </div>
                            </div>
                            <div className="paragrafo-modale col-md-7">
                                <p dangerouslySetInnerHTML={{ __html: this.state.pickedBoutique['description_' + (this.props.userLanguage == 'it' ? 'it': 'en')]}}/>
                            </div>

                        </div>


                        <div className="immagine-modale text-center">
                            <img className="img-fluid" src={this.state.pickedBoutique.image_url} alt="no location image..."/>
                        </div>
                    </div>
                </Modal>
            </React.Fragment>
        )
    }

}

export default BrandLocationPicker;
