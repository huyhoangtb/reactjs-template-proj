/**
 * Created by Peter Hoang Nguyen on 4/6/2017.
 */
import React from 'react';
import {injectI18N, t1} from "i18n";
import {connect} from 'react-redux';
import './stylesheet.scss';
import {Link} from 'react-router-dom';
import 'material-icons/css/material-icons.min.css';
import {reduxForm} from 'redux-form'
import TopMenuApp from './menu/TopMenuApp';
import LeftMenuApp from './menu/LeftMenuApp';
import ScrollArea from 'react-scrollbar';
import 'material-icons/css/material-icons.min.css';
import MediaPopup from 'components/media/MediaPopup';
import MediaDetailPopup from 'components/media/MediaDetailPopup';
import LoginDialog from 'components/user/auth/login/LoginDialog';
import LoginLink from 'components/user/auth/login/Link';
import QuillRickText from 'components/forms/elements/richtext/QuillRickText';
import QuillComponent from 'components/test/QuillComponent';
import LinkEditorExample from 'components/test/LinkEditorExample';

/**
 * Created by Peter Hoang Nguyen
 * Email: vntopmas@gmail.com
 * Tel: 0966298666
 * created date 06/04/2017
 **/
class WebApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {width: '0', height: '0'};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    }


    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions.bind(this));
    }

    updateWindowDimensions() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    render() {
        let {intl, webApp} =this.props;
        let msg = t1(intl, "msg");
        let scrollStyle = {
            height: '100%',
            width: '100%'
        };
        let scrollSpeed = 100;
        let data = (webApp && webApp.values) ? webApp.values.text : '';
        return (
            <div className="ui-app clearfix">
                <TopMenuApp/>
                <div className="ui-main-app">
                    <div className="ui-left-menu ui-left-frame pull-left">
                        <LeftMenuApp scrollStyle={scrollStyle} scrollSpeed={scrollSpeed}/>
                    </div>
                    <div className="ui-right-frame ui-app-body">
                        <ScrollArea
                            style={scrollStyle}
                            speed={scrollSpeed}>
                            <div className="ui-app-body-main" style={{height: '1000px'}}>
                                <MediaPopup/>
                                <LoginLink/>
                                <MediaDetailPopup/>
                                {/*<LinkEditorExample/>*/}
                                <QuillRickText selectorId="text" name="text"/>
                                <QuillRickText selectorId="name" name="name"/>

                                {/*<QuillRickText name="text" theme="snow" />*/}
                                {data}
                            </div>
                        </ScrollArea>

                    </div>
                </div>
                <LoginDialog/>
            </div>
        );
    }
}
let mapPropsToState = (state) => {
    return {
        webApp: state.form.webApp
    }
}
export default connect(mapPropsToState)(reduxForm({
    form: 'webApp',
})(injectI18N(WebApp)));