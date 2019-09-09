import React, {Fragment} from 'react';
import TextInputPageField from './TextInputPageField';
import WisiwygEditorPageField from './WisiwygEditorPageField';
import FileUploadInputFormikField from './../forms/FileUploadInputFormikField';

const PageFields = ({ errors, status, touched, fieldsData, setFieldValue, values, layout }) => {

    const fieldRenderer = (field, idx) => {

        switch (field.type) {

            case 'string': return (<TextInputPageField key={idx} errors={errors} name={field.name} touched={touched} />);break;

            case 'wisiwyg': return (<WisiwygEditorPageField key={idx} errors={errors} field={field} />); break;

            case 'image': return (<FileUploadInputFormikField key={idx} setFieldValue={setFieldValue} label={field.name} name={field.name} values={values} errors={errors} touched={touched} currentImage={field.previousUrl}/>); break;

            default: break;
        }

    };

    const sectionRenderer = (section, idx) => {

        const fields = [];

        section.fields.forEach((fieldName, idx) => {
            fields.push(fieldRenderer(fieldsData[fieldName], idx));
        });


        return (
            <div className="my-5" key={idx}>

                <h2>{section.title}</h2>

                {fields}

                <hr/>

            </div>
        )
    };

    const unorderedRenderedForm =  () => Object.values(fieldsData).map(fieldRenderer);

    const sections = layout && JSON.parse(layout).sections || null;

    return (
    <Fragment>
        {sections != null && sections.map(sectionRenderer) || unorderedRenderedForm() }
    </Fragment>
  );
}

export default PageFields;
