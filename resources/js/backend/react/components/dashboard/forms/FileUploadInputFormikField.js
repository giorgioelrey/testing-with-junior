import React from 'react';
import Formik from 'formik';
import { Field, ErrorMessage } from 'formik';

class Thumb extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      loading: false,
      thumb: undefined,
    };
  }


  componentWillReceiveProps(nextProps) {
    if (!nextProps.file) { return; }

    this.setState({ loading: true }, () => {
      let reader = new FileReader();

      reader.onloadend = () => {
        this.setState({ loading: false, thumb: reader.result });
      };

      reader.readAsDataURL(nextProps.file);
    });
  }

  render() {

    const { file } = this.props;
    const { loading, thumb } = this.state;

    //console.log('file', file)

    if (!file) { return null; }

    if (loading) { return <p>loading...</p>; }

    return (<img src={thumb}
      alt={file.name}
      className="img-thumbnail mt-2"
      height={200}
      width={200} />);
  }
}


const FileUploadInputFormikField = ({setFieldValue, touched,  label, name , values, errors}) => (

              <div className="form-group mb-5">
              <label className="text-uppercase">MAX Image File 2MB</label>
                <div className="custom-file">
                   <label className="custom-file-label" htmlFor={name}>{label}</label>
                   <input name={name} type="file" onChange={(event) => {
                     setFieldValue(name, event.currentTarget.files[0]);
                   }} className={'custom-file-input'} />
                </div>
                <Thumb file={values[name]} />
              </div>

)

export default FileUploadInputFormikField;


/*

<div className="form-group">
   <label htmlFor={name}>File upload</label>
   <input name={name} type="file" onChange={(event) => {
     setFieldValue(name, event.currentTarget.files[0]);
   }} className={'form-control' + ((errors[name] && touched[name]) ? ' is-invalid' : '')} />
   <ErrorMessage name={name} component="div" className="invalid-feedback" />
   <Thumb file={values[name]} />
 </div>
*/
