import React from 'react';
import {Field} from 'redux-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import 'react-quill/dist/react-quill.cleaner-rerender-setcontents.js';
import {connect} from 'react-redux';
import {openMediaManagerDialog, viewMediaDetail, pushQuillJS} from 'components/media/MediaActions';

const container = [
    [{'header': [1, 2, false]}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image'],
    ['clean']
];

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
];
let modules = {
    toolbar: {
        container: container,
        handlers: {
            'image': (value) => {
                // props.openMediaManagerDialog();
            }
        }
    }
};
// function imageHandler() {
//     var range = this.quill.getSelection();
//     var value = prompt('What is the image URL');
//     this.quill.insertEmbed(range.index, 'image', value, Quill.sources.USER);
// }
const renderTextField = ({ input, id, meta: { touched, error }, ...props }) => {
    modules.toolbar.handlers = {
        'image': function(value){
            props.openMediaManagerDialog();
            props.pushQuillJSAction(this.quill);
        }
    }

    let className = props.className ? props.className : '';
    className = props.selectorId ? props.selectorId + ' ' + className : className;

    let selectorId = props.selectorId ? '.' + props.selectorId : '.quill'

    return (
        <ReactQuill className={className}
                    theme='snow'
                    {...input}
                    {...props}
                    modules={modules}
                    formats={formats}
                    bounds={selectorId}/>
    )
}

/**
 * Created by Peter Hoang Nguyen
 * Email: vntopmas@gmail.com
 * Tel: 0966298666
 * created date 30/03/2017
 **/
class QuillRickText extends React.Component {
    constructor(pops) {
        super(pops);
        this.state = {};
    }

    render() {
        return (
            <Field component={renderTextField} {...this.props}  />
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        openMediaManagerDialog: () => {
            dispatch(openMediaManagerDialog(true));
            // dispatch(viewMediaDetail({
            //     viewing: true,
            //     data: {}
            // }))
        },
        pushQuillJSAction: (quill) => {
            dispatch(pushQuillJS(quill));
        }
    }
}


const populateStateToProps = (state) => {
    return {
        openMediaDialog: state.mm.openMediaDialog
    }
};


export default connect(populateStateToProps, mapDispatchToProps)(QuillRickText);
