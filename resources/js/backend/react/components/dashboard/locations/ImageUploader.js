import React, { Component } from 'react';
import axios from 'axios';

class ImageUploader extends Component {


  constructor(props){

    super(props);
    this.state = { selectedFile: null }

    this.fileChangedHandler = this.fileChangedHandler.bind(this);
    this.uploadHandler = this.uploadHandler.bind(this);

  }



  fileChangedHandler(event)  {
    this.setState({ selectedFile: event.target.files[0] })
  }

  uploadHandler() {
    console.log(this.state.selectedFile)
    const formData = new FormData()
   formData.append(
     'select_file',
     this.state.selectedFile,
     this.state.selectedFile.name
   )
   axios.post('/api/admin/image/store', formData,{
    onUploadProgress: progressEvent => {
      console.log(progressEvent.loaded / progressEvent.total)
    }
  })
  .then(res => {
    console.log('ok image', res)
  })
  .catch(err => {
    console.log ('ko image',err.response.data.message)
  })


  }

  render() {
    return (
      <React.Fragment>
      <div className="custom-file my-3">
        <input className="custom-file-input" type="file" name="select_file" onChange={this.fileChangedHandler}/>
        <label className="custom-file-label" htmlFor="select_file">Choose and upload an image</label>
      </div>
      <button className="btn btn-primary mb-3" onClick={this.uploadHandler}>Upload selected image!</button>
      </React.Fragment>
    );
  }
}

export default ImageUploader;
