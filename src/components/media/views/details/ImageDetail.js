/**
 * Created by Peter Hoang Nguyen on 4/8/2017.
 */
import React from 'react';
import {injectI18N, t1} from "i18n";
import {connect} from 'react-redux';
import  InputText from 'components/forms/elements/input-text';
import FlatButton from 'material-ui/FlatButton';
import {viewMediaDetail} from '../../MediaActions';
import {reduxForm} from 'redux-form'
import {Quill} from 'react-quill';

/**
 * Created by Peter Hoang Nguyen
 * Email: vntopmas@gmail.com
 * Tel: 0966298666
 * created date 08/04/2017
 **/
class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.closeMediaPopup = this.closeMediaPopup.bind(this);
        this.chooseImage = this.chooseImage.bind(this);
    }

    closeMediaPopup() {
        let {dispatch} =this.props;
        dispatch(viewMediaDetail({
            viewing: false
        }))
    }

    componentWillMount() {
        let {dispatch} = this.props;
    }

    chooseImage() {
        let {dispatch, quillJs, media} = this.props;
        let range = quillJs.getSelection();
        quillJs.insertEmbed(range.index, 'image', media.path, Quill.sources.USER);
    }

    render() {
        let {intl, media} =this.props;

        return (
            <div className="img-detail clearfix">
                {media &&
                <div>
                    <div className="clearfix">
                        <div className="image-panel  pull-left">
                            <div className="center-block-panel">
                                <img ref="imgDetail"
                                     src={media.path}/>
                            </div>
                        </div>
                        <div className="ui-img-info">
                            <InputText fullWidth={true} name="title" label={ t1(intl, 'title')}/>
                            <InputText fullWidth={true} name="alt" label={ t1(intl, 'Alt')}/>
                            <InputText className="margin-right15px" name="width" style={{width: "100px"}}
                                       label={ t1(intl, 'width')}/>
                            <InputText name="height" style={{width: "100px"}} label={ t1(intl, 'height')}/>
                        </div>
                    </div>
                    <div>
                        <FlatButton className="margin-right15px"
                                    label="Cancel"
                                    primary={true}
                                    onTouchTap={this.closeMediaPopup}
                        />
                        <FlatButton
                            label="Submit"
                            primary={true}
                            keyboardFocused={true}
                            onTouchTap={this.chooseImage}
                        />
                    </div>
                </div>
                }
            </div>

        );
    }
}

Image.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

Image = reduxForm({
    form: 'imageDetail',
})(injectI18N(Image));

const mapStateToProp = (state) => {
    let {viewDetailMedia} = state.mm
    let data = (viewDetailMedia && viewDetailMedia.data) ? viewDetailMedia.data : {};
    return ({
        initialValues: {
            title: data.name,
            alt: data.name,
            width: 300,
            height: 300
        },
        media: state.mm.viewDetailMedia.data,
        quillJs: state.mm.quillJS
    })
}

Image = connect(mapStateToProp
)(Image)
export default Image;