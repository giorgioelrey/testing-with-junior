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
        <input type="file" name="select_file" onChange={this.fileChangedHandler}/>
        <button onClick={this.uploadHandler}>Upload!</button>
      </React.Fragment>
    );
  }
}

export default ImageUploader;
