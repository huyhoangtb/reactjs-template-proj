/**
 * Created by Peter Hoang Nguyen on 4/8/2017.
 */
import React from 'react';
import {Field} from 'redux-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import 'react-quill/dist/react-quill.cleaner-rerender-setcontents.js';
import {connect} from 'react-redux';
import {openMediaManagerDialog} from 'components/media/MediaActions';

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

const populateStateToProps = (state) => {
    return {
        openMediaDialog: state.mm.openMediaDialog
    }
};
class QuillComponent extends React.Component {

    render() {
        let {openMediaDialog, dispatch} = this.props;
        let modules = {
            toolbar: {
                container: container,
                handlers: {
                    'image': (value) => {
                        dispatch(openMediaManagerDialog(true));
                    }
                }
            }
        }
        return (
            <ReactQuill {...this.props}
                        {...this.props.input}
                        theme='snow'
                        modules={modules}
                        formats={formats}
                        bounds={'.quill'}/>
        );
    }
}
export default connect(populateStateToProps)(QuillComponent)